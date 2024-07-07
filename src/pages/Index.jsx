import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Code, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-5xl font-bold mb-4">The Last Piece of Software</h1>
        <p className="text-xl mb-8">
          We’re building software that builds software. Our vision is to unlock human creativity— by enabling anyone to create software.
        </p>
        <Button size="lg" className="mx-auto">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Package className="h-10 w-10 mx-auto text-blue-500" />
              <CardTitle className="text-center mt-4">Automated Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              Let AI handle the coding.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 mx-auto text-blue-500" />
              <CardTitle className="text-center mt-4">Creative Freedom</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              Focus on your ideas, not the syntax.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 mx-auto text-blue-500" />
              <CardTitle className="text-center mt-4">Collaborative Platform</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              Work together seamlessly.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl mb-8">
            Our vision is to unlock human creativity by enabling anyone to create software. We believe in a future where software development is accessible to everyone, regardless of their technical background.
          </p>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <p className="mb-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
