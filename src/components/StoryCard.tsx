
interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function StoryCard({
  title,
  description,
  imageUrl,
}: StoryCardProps) {
  return (
    <div className="relative h-[400px] bg-black/20 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="w-full p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
}
