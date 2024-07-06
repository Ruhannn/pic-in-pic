import { VideoPlayer } from "./Video-player";

function App() {
  return (
    <main className="bg-[#120918] py-12 px-5">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="mb-8 text-5xl text-white">
          Let's make Picture in Picture!
        </h1>
        <p className="mb-8 text-white opacity-80">
          I love to cry and smile as well. Each tear and each smile holds a
          piece of my journey, a reflection of my soul. In every emotion, I find
          a story waiting to be told.
        </p>

        <VideoPlayer />

        <div className="pt-8 space-y-3 text-lg leading-relaxed text-white opacity-70">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={
                "w-full rounded-md bg-[#201726] " +
                // no this is not how you should make random classes :3
                (Math.random() > 0.5 ? "h-20" : "h-48")
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
