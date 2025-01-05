import { isFilled } from "@prismicio/client";
import "clsx";
/* empty css                                     */
const mapper$2 = async ({
  slice,
  context
}) => {
  const { client } = context;
  const programs = (await Promise.all(
    slice.primary.programs.map(async (program) => {
      if (isFilled.contentRelationship(program.program)) {
        return await client.getByID(program.program.id);
      }
    })
  )).filter((program) => program !== void 0);
  return {
    slice,
    programs
  };
};
const mapper$1 = async ({
  slice,
  context
}) => {
  const { client } = context;
  const videos = (await Promise.all(
    slice.primary.videos.map(async (video) => {
      if (isFilled.contentRelationship(video.video)) {
        return await client.getByID(video.video.id);
      }
    })
  )).filter((video) => video !== void 0);
  return {
    slice,
    videos
  };
};
const mapper = async ({
  slice,
  context
}) => {
  const { client } = context;
  const locations = (await Promise.all(
    slice.primary.locations.map(async (location) => {
      if (isFilled.contentRelationship(location.location)) {
        return await client.getByID(location.location.id);
      }
    })
  )).filter((location) => location !== void 0);
  return {
    slice,
    locations
  };
};
const mappers = {
  programs: mapper$2,
  videos: mapper$1,
  locations: mapper
};
export {
  mappers as m
};
