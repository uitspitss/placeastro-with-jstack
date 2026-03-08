import { PlaceImageList } from '@/components/place-image-list';
import { PlaceImageUploadForm } from '@/components/place-image-upload-form';

const UploadPage = () => {
  return (
    <div className="gap-8">
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <PlaceImageUploadForm />
      </div>
      <PlaceImageList />
    </div>
  );
};

export default UploadPage;
