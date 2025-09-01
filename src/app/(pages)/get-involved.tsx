
import Layout from '@/components/Layout';
import { Button } from '@/components/Button';

const GetInvolvedPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
        <div className="space-x-4">
          <Button size="lg">Volunteer</Button>
          <Button size="lg">Become a Mengelist</Button>
          <Button size="lg">Partner with Us</Button>
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolvedPage;
