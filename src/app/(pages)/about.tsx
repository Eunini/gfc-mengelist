
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Let&aposs Talk Period with GFC is a non-governmental organization dedicated to breaking the silence and stigma surrounding menstruation. We believe that every girl and woman deserves to manage her period with dignity and confidence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower girls and women by providing access to menstrual health education, products, and a supportive community.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
