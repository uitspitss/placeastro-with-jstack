import Uppy from '@uppy/core';
import { Dashboard, useUppyState } from '@uppy/react';
import { useEffect, useState } from 'react';
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { client } from '@/lib/client';
import { createMutationKey, createQueryKey } from '@/lib/query-key';
import { createPlaceImageSchema } from '@placeastro/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = createPlaceImageSchema.merge(
  z.object({
    file: z
      .instanceof(File)
      .refine((file) => file.size > 0, 'The file is required.'),
  }),
);

type SchemaType = z.infer<typeof schema>;

export function PlaceImageUploadForm() {
  const queryClient = useQueryClient();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      catalogue: 'M',
      catalogueNumber: '',
      credits: '',
      sourceUrl: '',
      file: undefined,
    },
  });
  const [uppy] = useState(() => new Uppy());
  const files = useUppyState(uppy, (state) => state.files);
  const mutation = useMutation({
    mutationKey: createMutationKey('placeImage').add(),
    mutationFn: async (data: SchemaType) => {
      const key = `${data.catalogue}/${crypto.randomUUID()}`;

      const { uploadUrl, imgixUrl } =
        await client.placeImages.getUploadUrl({ key });

      const resUpload = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': data.file.type,
        },
        body: data.file,
      });
      if (!resUpload.ok) {
        throw new Error('Failed to upload file');
      }

      const placeImage = await client.placeImages.create({
        catalogue: data.catalogue,
        catalogueNumber: data.catalogueNumber,
        credits: data.credits,
        sourceUrl: data.sourceUrl,
        url: imgixUrl,
      });

      return placeImage;
    },
  });

  const onSubmit = async (data: SchemaType) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        uppy.clear();
        queryClient.invalidateQueries({
          queryKey: createQueryKey('placeImage').list(),
        });
      },
      onError: (error) => {
        console.error('Upload failed:', error);
        alert('Upload failed. Please try again.');
      },
    });
  };

  useEffect(() => {
    if (!files) {
      alert('Please select a file to upload.');
      return;
    }

    const file = Object.values(files).map((value) => value.data)[0];
    if (!file || !(file instanceof File)) return;

    form.setValue('file', file);
  }, [files, form.setValue]);

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <select
          className="w-full rounded-full px-4 py-2 text-black bg-white"
          {...form.register('catalogue')}
        >
          <option value="">Catalogue</option>
          <option value="M">M</option>
          <option value="NGC">NGC</option>
        </select>
        {form.formState.errors.catalogue?.message && (
          <p className="text-red-500">
            {form.formState.errors.catalogue?.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Catalogue Number"
          className="w-full rounded-full px-4 py-2 text-black bg-white"
          inputMode="numeric"
          {...form.register('catalogueNumber')}
        />
        {form.formState.errors.catalogueNumber?.message && (
          <p className="text-red-500">
            {form.formState.errors.catalogueNumber.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Credits"
          className="w-full rounded-full px-4 py-2 text-black bg-white"
          {...form.register('credits')}
        />
        {form.formState.errors.credits?.message && (
          <p className="text-red-500">
            {form.formState.errors.credits.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Source URL"
          className="w-full rounded-full px-4 py-2 text-black bg-white"
          {...form.register('sourceUrl')}
        />
        <p className="text-red-500">
          {form.formState.errors.sourceUrl?.message}
        </p>
        <Dashboard uppy={uppy} />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
