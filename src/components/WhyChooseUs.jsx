import { Flame, Leaf, Award, Heart } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: Flame,
    title: 'Wood-Fired Craft',
    description:
      'Every grill dish is cooked over coconut-shell charcoal and hardwood, giving our food a smoky depth that gas and electric simply cannot replicate.',
  },
  {
    icon: Leaf,
    title: 'Farm to Flame',
    description:
      'We partner with organic farms across Kerala and source seafood daily from the Kochi harbour. Fresh, local, and traceable — always.',
  },
  {
    icon: Award,
    title: 'Award-Winning Team',
    description:
      'Led by Chef Arjun Menon, our kitchen team brings together decades of experience across Michelin-starred restaurants and Kerala\'s finest heritage kitchens.',
  },
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description:
      'From the moment you walk in, our team ensures every detail of your evening is taken care of. Great food deserves great company.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-label">Why The Ember</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-subtitle">
            More than a restaurant — a commitment to flavour, craft
            and the art of gathering around fire.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="why__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="why__card">
                <div className="why__card-icon">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="why__card-title">{feature.title}</h4>
                <p className="why__card-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;