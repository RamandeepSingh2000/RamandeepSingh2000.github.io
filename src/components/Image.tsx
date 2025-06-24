import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

type ImageProps = {
  src: string;
  LODSources?: string[];
};

export default function Image({ src, LODSources }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLODSrcIndex, setCurrentLODSrcIndex] = useState(0);

  return (
    <>
      {!LODSources || LODSources.length == 0 ? (
        <>
          {isLoading && <ImagePlaceholder />}
          <img
            src={src}
            onLoad={() => setIsLoading(false)}
            style={isLoading ? { display: "none" } : {}}
          />
        </>
      ) : (
        <img
          src={
            currentLODSrcIndex == LODSources.length
              ? src
              : LODSources[currentLODSrcIndex]
          }
          onLoad={() => {
            if (currentLODSrcIndex < LODSources.length) {
              setCurrentLODSrcIndex(currentLODSrcIndex + 1);
            }
          }}
        />
      )}
    </>
  );
}
