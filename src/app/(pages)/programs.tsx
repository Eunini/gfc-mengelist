import Layout from '@/components/Layout';
import Card from '@/components/Card';

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Pad and Empower the Girl Child Project"
            description="Providing menstrual products and education to girls in need."
            link="/pad-empower"
            linkText="Learn More"
          />
          <Card
            title="The Mengelist Movement"
            description="A community of advocates for menstrual health equity."
            link="/mengelist-movement"
            linkText="Learn More"
          />
          <Card
            title="Flowsisi Reusables"
            description="Promoting sustainable menstrual products."
            link="/flowsisi-reusables"
            linkText="Learn More"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
