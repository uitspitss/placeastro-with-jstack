import { PlaceImageList } from '@/components/place-image-list';
import { PlaceImageUploadForm } from '@/components/place-image-upload-form';
import { getSession } from '@/lib/auth-client';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/upload')({
  beforeLoad: async () => {
    const { data: session } = await getSession();
    if (!session) {
      throw redirect({ to: '/login' });
    }
  },
  component: UploadPage,
});

function UploadPage() {
  return (
    <div className="gap-8">
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <PlaceImageUploadForm />
      </div>
      <PlaceImageList />
    </div>
  );
}
