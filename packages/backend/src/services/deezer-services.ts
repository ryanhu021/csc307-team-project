import axios from "axios";

type Song = {
  name: string;
  artist: string;
  album: string;
  providerUrl: string;
};

async function getRedirectLink(url: string) {
  try {
    const response = await axios.get(url);
    const finalUrl = response.request.res.responseUrl;

    return finalUrl;
  } catch (error) {
    console.error("Axios Redirect Follow Error:", error);
  }
}

export async function deezerUrlSearch(id: string): Promise<Song> {
  try {
    const providerUrl = `https://api.deezer.com/track/${id}`;
    const response = await axios.get(providerUrl, {
      params: {
        apikey: process.env.DEEZER_KEY,
      },
    });

    const track: Song = {
      name: response.data.title,
      artist: response.data.artist.name,
      album: response.data.album.title,
      providerUrl: providerUrl,
    };

    return track;
  } catch (error: unknown) {
    console.error("Error Searching for songs:", error);
    throw error;
  }
}

// export async function deezerSearch(
//   title: string,
//   artist: string
// ): Promise<DeezerTrack> {
//   try {
//     const response = await axios.get(
//       `https://api.deezer.com/search/track?q="Smack That (Clean) Akon"`,
//       {
//         params: {
//           apikey: process.env.DEEZER_API_KEY,
//         },
//       }
//     );

//     const track: DeezerTrack = {
//       id: response.data.id,
//       title: response.data.title,
//       artist: response.data.artist.name,
//       album: {
//         title: response.data.album.title,
//         picture: response.data.album.picture,
//       },
//     };
//     return track;
//   } catch (error: unknown) {
//     console.error("Error Searching for songs:", error);
//     throw error;
//   }
// }