import Feature from './Feature';
import Testimonial from '../Testimonial';

export default function AuthSidebar() {
  return (
    <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary-600 to-primary-700 p-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -top-48 -right-24 animate-float" />
        <div className="absolute w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 left-12 animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Transform Your Property Management Experience with MyKingdom
          </h1>

          <div className="space-y-6">
            <Feature
              title="Smart Portfolio Management"
              description="Leverage AI-powered insights to optimize your property portfolio performance in real-time."
            />
            <Feature
              title="Automated Excellence"
              description="Save 15+ hours weekly with intelligent automation for tenant management and maintenance."
            />
            <Feature
              title="Enterprise-Grade Security"
              description="Bank-level encryption and compliance measures to protect your valuable property data."
            />
            <Testimonial />
            <div className="text-center text-white/80">
              Join 3,000,000+ professionals who trust MyKingdom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}