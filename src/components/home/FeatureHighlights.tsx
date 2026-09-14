import { featureHighlights } from "../../data/home";

export default function FeatureHighlights() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-5 sm:px-8 lg:px-12">
      {featureHighlights.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-6 sm:py-9 flex-1 bg-surface border border-white/8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          <img
            src="/assets/icons/arrow.png"
            alt=""
            width={45}
            height={40}
          />
          <div className="flex flex-col gap-2.5">
            <p>{feature.title}</p>
            <span className="opacity-50 text-xs">{feature.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
