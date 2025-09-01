
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Pad and Empower the Girl Child Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Providing menstrual products and education to girls in need.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>The Mengelist Movement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A community of advocates for menstrual health equity.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flowsisi Reusables</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Promoting sustainable menstrual products.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
