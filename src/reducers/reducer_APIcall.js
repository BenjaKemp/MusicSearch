import { SET_SEARCH_RESULTS, SORT_BY, FETCH_SONGS_SUCCESS } from "../constants/action-types";

const initialState = {
  resultCount: 50,
  results: [
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293848,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Billie Jean",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Billie Jean (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/billie-jean-single-version/159292399?i=159293848&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/billie-jean-single-version/159292399?i=159293848&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/c6/50/11/c6501132-e865-3711-175a-ddb79114e42f/mzaf_3806132797788612279.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 16,
      trackTimeMillis: 294601,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294551,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Smooth Criminal",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Smooth Criminal",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/smooth-criminal/159292399?i=159294551&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/smooth-criminal/159292399?i=159294551&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/97/cc/24/97cc2441-7e2a-4539-3d5a-c7ccaeec5564/mzaf_7852665412301268650.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 8,
      trackTimeMillis: 258635,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294060,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Beat It",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Beat It (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/beat-it-single-version/159292399?i=159294060&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/beat-it-single-version/159292399?i=159294060&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/d8/00/ad/d800adc8-3c00-2714-eafa-5a8f5ecf7ebf/mzaf_1667480836280622637.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 17,
      trackTimeMillis: 259085,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294478,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Man In the Mirror",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Man In the Mirror",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/man-in-the-mirror/159292399?i=159294478&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/man-in-the-mirror/159292399?i=159294478&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/56/a3/ca/56a3cadd-95ef-4139-a58f-48a3d53dff6c/mzaf_3097025142429158920.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 5,
      trackTimeMillis: 320905,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293312,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Don't Stop 'Til You Get Enough",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Don't Stop 'Til You Get Enough",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/dont-stop-til-you-get-enough/159292399?i=159293312&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/dont-stop-til-you-get-enough/159292399?i=159293312&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/1e/e7/08/1ee70833-1d2a-0dd4-56d3-f5ad4fa67a4a/mzaf_3934767041830132765.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1979-07-10T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 10,
      trackTimeMillis: 364834,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294429,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "The Way You Make Me Feel",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "The Way You Make Me Feel (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/the-way-you-make-me-feel-single-version/159292399?i=159294429&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/the-way-you-make-me-feel-single-version/159292399?i=159294429&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/c5/0a/1f/c50a1f4f-605f-91ee-eb0b-efe1810f64e1/mzaf_648735685470354294.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 4,
      trackTimeMillis: 267151,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294345,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Bad",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Bad",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/bad/159292399?i=159294345&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/bad/159292399?i=159294345&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/ea/42/98/ea429810-df92-e0af-2fc8-b9d2e30b5c01/mzaf_1330442400073569586.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 1,
      trackTimeMillis: 246670,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 269572838,
      trackId: 269573303,
      artistName: "Michael Jackson",
      collectionName: "Thriller",
      trackName: "Thriller",
      collectionCensoredName: "Thriller",
      trackCensoredName: "Thriller",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/thriller/269572838?i=269573303&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/thriller/269572838?i=269573303&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/d3/14/22/d3142293-0b9a-babc-9e3b-d304b7ff6012/mzaf_4648147054405747980.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 4,
      trackTimeMillis: 357753,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294296,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "P.Y.T. (Pretty Young Thing)",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "P.Y.T. (Pretty Young Thing)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/p-y-t-pretty-young-thing/159292399?i=159294296&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/p-y-t-pretty-young-thing/159292399?i=159294296&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/fe/dc/51/fedc5102-36f4-b06b-ce06-e17389700b74/mzaf_5499446501676427123.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 20,
      trackTimeMillis: 239763,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294814,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Black or White",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Black or White",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/black-or-white/159292399?i=159294814&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/black-or-white/159292399?i=159294814&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/d6/bf/c2/d6bfc22f-528b-bd64-6eda-08c50232b3c7/mzaf_7202861527895644665.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1991-11-11T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 9,
      trackTimeMillis: 256562,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46801,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "I Want You Back",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "I Want You Back",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/46846?i=46801&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/46846?i=46801&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/0d/0c/25/mzm.ymgbmfir.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1969-10-07T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 1,
      trackTimeMillis: 179960,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 895283652,
      trackId: 895283665,
      artistName: "Jackson 5",
      collectionName:
        "Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)",
      trackName: "I Want You Back",
      collectionCensoredName:
        "Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)",
      trackCensoredName: "I Want You Back",
      collectionArtistId: "4035426",
      collectionArtistName: "Various Artists",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/895283652?i=895283665&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/895283652?i=895283665&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music5/v4/58/2b/f1/582bf182-3e74-8ba0-13de-6f1fb746921a/mzaf_1453362052697265399.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music7/v4/5b/09/65/5b0965d7-d219-a01e-d4a2-933a5bd06291/source/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music7/v4/5b/09/65/5b0965d7-d219-a01e-d4a2-933a5bd06291/source/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music7/v4/5b/09/65/5b0965d7-d219-a01e-d4a2-933a5bd06291/source/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: -1.0,
      releaseDate: "1969-10-07T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 12,
      trackNumber: 7,
      trackTimeMillis: 178813,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Soundtrack",
      isStreamable: false
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46807,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "I'll Be There",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "I'll Be There",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/ill-be-there/46846?i=46807&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/ill-be-there/46846?i=46807&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/19/c5/b5/19c5b5e3-b880-4962-995f-9016d9402e7b/mzaf_6339609602515790905.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1970-08-28T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 4,
      trackTimeMillis: 237907,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294311,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Thriller",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Thriller (2003 Edit)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/thriller-2003-edit/159292399?i=159294311&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/thriller-2003-edit/159292399?i=159294311&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/43/cc/1a/43cc1a92-860e-f981-d340-68b656416bd9/mzaf_754760069468276494.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "2003-11-18T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 21,
      trackTimeMillis: 312967,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 159292399,
      trackId: 159292829,
      artistName: "Jackson 5",
      collectionName: "The Essential Michael Jackson",
      trackName: "The Love You Save",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "The Love You Save",
      collectionArtistId: "32940",
      collectionArtistName: "Michael Jackson",
      collectionArtistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/the-love-you-save/159292399?i=159292829&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/the-love-you-save/159292399?i=159292829&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/82/11/07/8211074e-4cb7-57b0-ab40-eb2161f8938f/mzaf_8530483243832371722.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: -1.0,
      releaseDate: "1970-05-13T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 3,
      trackTimeMillis: 184563,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: false
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 159292399,
      trackId: 159292669,
      artistName: "Jackson 5",
      collectionName: "The Essential Michael Jackson",
      trackName: "ABC",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "ABC",
      collectionArtistId: "32940",
      collectionArtistName: "Michael Jackson",
      collectionArtistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/abc/159292399?i=159292669&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/abc/159292399?i=159292669&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/76/41/47/764147be-a4c8-6f0a-062b-60cb4065690e/mzaf_1224913706455725605.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: -1.0,
      releaseDate: "1970-02-24T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 2,
      trackTimeMillis: 177988,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: false
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 159292399,
      trackId: 159292550,
      artistName: "Jackson 5",
      collectionName: "The Essential Michael Jackson",
      trackName: "I Want You Back",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "I Want You Back",
      collectionArtistId: "32940",
      collectionArtistName: "Michael Jackson",
      collectionArtistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/45/bd/fc/45bdfc71-01f5-a730-83af-4650611e3ff0/mzaf_8726531587591019438.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: -1.0,
      releaseDate: "1969-10-07T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 1,
      trackTimeMillis: 179414,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: false
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293419,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Rock With You",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Rock With You (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/rock-with-you-single-version/159292399?i=159293419&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/rock-with-you-single-version/159292399?i=159293419&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/32/3a/ce/323acedf-2494-4e27-6978-ca46f233d1f6/mzaf_4068102875829328499.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1979-08-10T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 11,
      trackTimeMillis: 204194,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 104136,
      trackId: 104068,
      artistName: "Jackson 5",
      collectionName: "Anthology: Jackson 5",
      trackName: "Abc",
      collectionCensoredName: "Anthology: Jackson 5",
      trackCensoredName: "Abc",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/abc/104136?i=104068&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/abc/104136?i=104068&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/02/49/d2/0249d2ce-b440-36ea-8c3f-fd4ee45edb04/mzaf_273608474957562477.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/100x100bb.jpg",
      collectionPrice: 19.99,
      trackPrice: 1.29,
      releaseDate: "1970-05-08T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 3,
      trackTimeMillis: 177427,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294123,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Wanna Be Startin' Somethin'",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Wanna Be Startin' Somethin' (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/wanna-be-startin-somethin-single-version/159292399?i=159294123&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/wanna-be-startin-somethin-single-version/159292399?i=159294123&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/aa/9d/6b/aa9d6b88-15f6-7daf-2288-b6c692a587e9/mzaf_7291431291142576940.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1983-05-08T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 18,
      trackTimeMillis: 260888,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294254,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Human Nature",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Human Nature (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/human-nature-single-version/159292399?i=159294254&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/human-nature-single-version/159292399?i=159294254&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/65/f1/12/65f112e8-7432-0f6f-85f2-3fee4adc8e81/mzaf_2240622733900136214.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 19,
      trackTimeMillis: 227245,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46803,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "ABC",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "ABC",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/abc/46846?i=46803&uo=4",
      trackViewUrl: "https://itunes.apple.com/us/album/abc/46846?i=46803&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music5/v4/0e/b4/48/0eb44860-07d0-2d61-20e7-df822bccc2fb/mzaf_1752647741581029092.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1970-02-24T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 2,
      trackTimeMillis: 178267,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295548,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Remember the Time",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Remember the Time",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/remember-the-time/159292399?i=159295548&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/remember-the-time/159292399?i=159295548&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/bf/12/a7/bf12a7b7-af35-2def-1efc-cf95a1f6a347/mzaf_4721557586522460849.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1991-11-26T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 11,
      trackTimeMillis: 240745,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294485,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Dirty Diana",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Dirty Diana",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/dirty-diana/159292399?i=159294485&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/dirty-diana/159292399?i=159294485&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/66/d6/73/66d6737d-f6b7-80ed-fe59-a26bcabbf724/mzaf_6566345490050564977.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 6,
      trackTimeMillis: 282596,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295684,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Will You Be There",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Will You Be There (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/will-you-be-there-single-version/159292399?i=159295684&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/will-you-be-there-single-version/159292399?i=159295684&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/bc/9b/59/bc9b59d3-81e7-688b-e6ae-3477d36b34c9/mzaf_3835539955222370461.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1993-06-28T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 14,
      trackTimeMillis: 224015,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 269572838,
      trackId: 269573341,
      artistName: "Michael Jackson",
      collectionName: "Thriller",
      trackName: "Beat It",
      collectionCensoredName: "Thriller",
      trackCensoredName: "Beat It",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/beat-it/269572838?i=269573341&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/beat-it/269572838?i=269573341&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/eb/95/f8/eb95f867-ecd5-35d0-f92c-c9154134f5eb/mzaf_2082474707674950716.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 5,
      trackTimeMillis: 258152,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 264323152,
      trackId: 264323206,
      artistName: "Jackson 5",
      collectionName: "Number 1's: Christmas",
      trackName: "Santa Claus Is Coming to Town",
      collectionCensoredName: "Number 1's: Christmas",
      trackCensoredName: "Santa Claus Is Coming to Town",
      collectionArtistId: "36270",
      collectionArtistName: "Various Artists",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/santa-claus-is-coming-to-town/264323152?i=264323206&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/santa-claus-is-coming-to-town/264323152?i=264323206&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/85/e6/29/85e629f4-24c6-8003-f1c3-ae3544ed35a0/mzaf_3230073731284587633.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/7f/81/b5/7f81b50f-797c-7254-fbf5-fc37617dccb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/7f/81/b5/7f81b50f-797c-7254-fbf5-fc37617dccb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/7f/81/b5/7f81b50f-797c-7254-fbf5-fc37617dccb9/source/100x100bb.jpg",
      collectionPrice: 7.99,
      trackPrice: 1.29,
      releaseDate: "1970-10-15T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 17,
      trackNumber: 8,
      trackTimeMillis: 143507,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Holiday",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295880,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "You Are Not Alone",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "You Are Not Alone (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/you-are-not-alone-single-version/159292399?i=159295880&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/you-are-not-alone-single-version/159292399?i=159295880&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/76/e7/a9/76e7a9bf-f279-96e4-0c26-f4933e286027/mzaf_4833403040304710961.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1995-08-15T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 16,
      trackTimeMillis: 295354,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295942,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "You Rock My World",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "You Rock My World",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/you-rock-my-world/159292399?i=159295942&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/you-rock-my-world/159292399?i=159295942&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/80/b6/c4/80b6c44c-64f7-2725-02cc-309f7a3e2970/mzaf_7766150266364696863.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "2001-08-22T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 17,
      trackTimeMillis: 307072,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 269572838,
      trackId: 269573364,
      artistName: "Michael Jackson",
      collectionName: "Thriller",
      trackName: "Billie Jean",
      collectionCensoredName: "Thriller",
      trackCensoredName: "Billie Jean",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/billie-jean/269572838?i=269573364&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/billie-jean/269572838?i=269573364&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview19/v4/41/cb/e3/41cbe381-2991-071b-7985-76afbbabab6a/mzaf_5021382539648526963.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 6,
      trackTimeMillis: 294188,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 291184660,
      trackId: 291184725,
      artistName: "Jackson 5",
      collectionName: "The Essential NOW That's What I Call Christmas",
      trackName: "Santa Claus Is Coming to Town",
      collectionCensoredName: "The Essential NOW That's What I Call Christmas",
      trackCensoredName: "Santa Claus Is Coming to Town",
      collectionArtistId: "36270",
      collectionArtistName: "Various Artists",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/santa-claus-is-coming-to-town/291184660?i=291184725&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/santa-claus-is-coming-to-town/291184660?i=291184725&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/a6/d6/42/a6d642a1-6a75-9485-efbb-025f1f2ab086/mzaf_5764235285337595145.plus.aac.p.m4a",
      artworkUrl30:
        "https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/c4/32/b0/c432b0b1-8f0a-b13a-0454-47fce7f6463b/source/30x30bb.jpg",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/c4/32/b0/c432b0b1-8f0a-b13a-0454-47fce7f6463b/source/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music71/v4/c4/32/b0/c432b0b1-8f0a-b13a-0454-47fce7f6463b/source/100x100bb.jpg",
      collectionPrice: 8.99,
      trackPrice: 1.29,
      releaseDate: "1970-10-01T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 25,
      trackNumber: 11,
      trackTimeMillis: 142907,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Holiday",
      isStreamable: false
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46815,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "Never Can Say Goodbye",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "Never Can Say Goodbye",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/never-can-say-goodbye/46846?i=46815&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/never-can-say-goodbye/46846?i=46815&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music1/v4/4b/1b/6f/4b1b6f3a-c565-77e1-ed62-bbba3e5211db/mzaf_6269403667368160461.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1971-03-16T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 8,
      trackTimeMillis: 180107,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 273598907,
      trackId: 273598922,
      artistName: "Michael Jackson",
      collectionName: "Number Ones",
      trackName: "The Way You Make Me Feel",
      collectionCensoredName: "Number Ones",
      trackCensoredName: "The Way You Make Me Feel",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/the-way-you-make-me-feel/273598907?i=273598922&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/the-way-you-make-me-feel/273598907?i=273598922&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/56/cd/e2/56cde2eb-d7ba-0c2e-e05b-fa7a9a1e07d3/mzaf_8013778794991645049.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 9,
      trackTimeMillis: 299138,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46811,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "Who's Lovin' You",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "Who's Lovin' You",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/whos-lovin-you/46846?i=46811&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/whos-lovin-you/46846?i=46811&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music1/v4/15/10/3e/15103e9b-f220-adcb-f322-b75537eceb70/mzaf_5641778822049428548.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1960-09-27T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 6,
      trackTimeMillis: 241627,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46805,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "The Love You Save",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "The Love You Save",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/the-love-you-save/46846?i=46805&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/the-love-you-save/46846?i=46805&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/3b/62/84/3b6284be-cc10-2fd7-f746-d3ebd9ff5363/mzaf_3577762866546894440.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1970-05-08T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 3,
      trackTimeMillis: 184400,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293470,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Off the Wall",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Off the Wall (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/off-the-wall-single-version/159292399?i=159293470&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/off-the-wall-single-version/159292399?i=159293470&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/dd/a3/38/dda33858-8632-b1fc-8a78-c5872c63ffd4/mzaf_3845191637557558682.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1979-08-10T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 12,
      trackTimeMillis: 226803,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 104136,
      trackId: 104061,
      artistName: "Jackson 5",
      collectionName: "Anthology: Jackson 5",
      trackName: "I Want You Back",
      collectionCensoredName: "Anthology: Jackson 5",
      trackCensoredName: "I Want You Back (Single)",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back-single/104136?i=104061&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/i-want-you-back-single/104136?i=104061&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/5e/88/3b/5e883b87-9a62-b4c1-b1a3-bfc66ac0334d/mzaf_6277767604950478279.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/28/05/ee/2805eef0-29f7-3b97-f612-e4eeb59f7403/source/100x100bb.jpg",
      collectionPrice: 19.99,
      trackPrice: 1.29,
      releaseDate: "1969-10-07T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 1,
      trackTimeMillis: 179227,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "104063",
      collectionId: 46846,
      trackId: 46836,
      artistName: "Jackson 5",
      collectionName: "The Ultimate Collection",
      trackName: "Dancing Machine",
      collectionCensoredName: "The Ultimate Collection",
      trackCensoredName: "Dancing Machine",
      artistViewUrl: "https://itunes.apple.com/us/artist/jackson-5/104063?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/dancing-machine/46846?i=46836&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/dancing-machine/46846?i=46836&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/b1/8c/95/b18c9513-cbd2-dc20-2fc1-c5be001d661e/mzaf_2055632258766208769.plus.aac.p.m4a",
      artworkUrl30:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/30x30bb.jpg",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music/v4/03/70/18/03701888-e5de-25e2-b5b3-b277b8df6cb9/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1974-09-05T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 17,
      trackTimeMillis: 156733,
      country: "USA",
      currency: "USD",
      primaryGenreName: "R&B/Soul",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295278,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Heal the World",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Heal the World",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/heal-the-world/159292399?i=159295278&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/heal-the-world/159292399?i=159295278&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/37/46/8e/37468e9f-c530-f169-a38f-f2f72cc74fa6/mzaf_5321279868558347031.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1991-11-26T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 10,
      trackTimeMillis: 385713,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293508,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "She's Out of My Life",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "She's Out of My Life (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/shes-out-of-my-life-single-version/159292399?i=159293508&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/shes-out-of-my-life-single-version/159292399?i=159293508&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/0b/f9/95/0bf99543-568c-a5dc-47ca-6aad051e4af0/mzaf_225419430975884506.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1979-08-10T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 13,
      trackTimeMillis: 218708,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 850697616,
      trackId: 850697815,
      artistName: "Michael Jackson & Justin Timberlake",
      collectionName: "XSCAPE (Deluxe)",
      trackName: "Love Never Felt So Good",
      collectionCensoredName: "XSCAPE (Deluxe)",
      trackCensoredName: "Love Never Felt So Good",
      collectionArtistName: "Michael Jackson",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/love-never-felt-so-good/850697616?i=850697815&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/love-never-felt-so-good/850697616?i=850697815&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/50/f0/1c/50f01ccf-4dd4-eea0-1c94-7d9ce591fdfb/mzaf_6052792677521696178.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/ae/42/98/ae4298fb-2ffb-2a89-2286-4058a8791439/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/ae/42/98/ae4298fb-2ffb-2a89-2286-4058a8791439/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/ae/42/98/ae4298fb-2ffb-2a89-2286-4058a8791439/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "2014-05-02T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 16,
      trackNumber: 17,
      trackTimeMillis: 245671,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294386,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "I Just Can't Stop Loving You",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "I Just Can't Stop Loving You",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/i-just-cant-stop-loving-you/159292399?i=159294386&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/i-just-cant-stop-loving-you/159292399?i=159294386&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/36/a9/22/36a92256-72f0-f577-f3cb-1b42dbcc5fa5/mzaf_7332817920765776476.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-07-20T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 2,
      trackTimeMillis: 252804,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294407,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Leave Me Alone",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Leave Me Alone",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/leave-me-alone/159292399?i=159294407&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/leave-me-alone/159292399?i=159294407&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/3c/5f/65/3c5f65f2-51cf-3b93-1638-4885bc66c254/mzaf_7870959574603617259.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 3,
      trackTimeMillis: 281415,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159293734,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "The Girl Is Mine",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "The Girl Is Mine",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/the-girl-is-mine/159292399?i=159293734&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/the-girl-is-mine/159292399?i=159293734&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview82/v4/c4/24/65/c42465fe-1748-5044-341d-ac0086ae881f/mzaf_6014282753638215684.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1982-10-18T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 15,
      trackTimeMillis: 222737,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 269572838,
      trackId: 269573447,
      artistName: "Michael Jackson",
      collectionName: "Thriller",
      trackName: "P.Y.T. (Pretty Young Thing)",
      collectionCensoredName: "Thriller",
      trackCensoredName: "P.Y.T. (Pretty Young Thing)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/p-y-t-pretty-young-thing/269572838?i=269573447&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/p-y-t-pretty-young-thing/269572838?i=269573447&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/df/d3/5f/dfd35f3a-844f-5d28-04f4-b7cdb0c655b9/mzaf_4364677068393145554.plus.aac.p.m4a",
      artworkUrl30:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/30x30bb.jpg",
      artworkUrl60:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/60x60bb.jpg",
      artworkUrl100:
        "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a6/60/4a/a6604a4e-c90d-4b32-ebff-1c8ebc6be615/source/100x100bb.jpg",
      collectionPrice: 9.99,
      trackPrice: 1.29,
      releaseDate: "1982-11-30T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 9,
      trackNumber: 8,
      trackTimeMillis: 238724,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295575,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "In the Closet",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "In the Closet (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/in-the-closet-single-version/159292399?i=159295575&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/in-the-closet-single-version/159292399?i=159295575&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/80/bd/85/80bd8548-ffbc-caee-20da-821e968e7e7b/mzaf_5134319738785616328.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1992-04-09T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 12,
      trackTimeMillis: 288280,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 273598907,
      trackId: 273598912,
      artistName: "Michael Jackson",
      collectionName: "Number Ones",
      trackName: "Don't Stop 'Til You Get Enough",
      collectionCensoredName: "Number Ones",
      trackCensoredName: "Don't Stop 'Til You Get Enough (2003 Edit)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/dont-stop-til-you-get-enough-2003-edit/273598907?i=273598912&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/dont-stop-til-you-get-enough-2003-edit/273598907?i=273598912&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/f6/59/81/f65981d3-03dc-a178-4944-40956474632e/mzaf_4189243689114475753.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/75/b8/d2/75b8d292-88f8-3840-33be-c0b4b1e64211/source/100x100bb.jpg",
      collectionPrice: 10.99,
      trackPrice: 1.29,
      releaseDate: "1979-07-28T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 1,
      discNumber: 1,
      trackCount: 18,
      trackNumber: 1,
      trackTimeMillis: 237114,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159295746,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Dangerous",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Dangerous",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/dangerous/159292399?i=159295746&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/dangerous/159292399?i=159295746&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/c1/e4/2f/c1e42fc2-a038-7869-b5f6-f8ff8a0dd8b6/mzaf_1174655326831789443.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1991-11-26T08:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 15,
      trackTimeMillis: 419909,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159294541,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Another Part of Me",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Another Part of Me (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/another-part-of-me-single-version/159292399?i=159294541&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/another-part-of-me-single-version/159292399?i=159294541&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/9f/cb/b0/9fcbb096-5ab1-bcab-95cc-e9f5086a43dd/mzaf_5724917272033573605.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: 1.29,
      releaseDate: "1987-08-31T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 2,
      trackCount: 17,
      trackNumber: 7,
      trackTimeMillis: 226586,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: true
    },
    {
      wrapperType: "track",
      kind: "song",
      artistId: "32940",
      collectionId: 159292399,
      trackId: 159292992,
      artistName: "Michael Jackson",
      collectionName: "The Essential Michael Jackson",
      trackName: "Ben",
      collectionCensoredName: "The Essential Michael Jackson",
      trackCensoredName: "Ben (Single Version)",
      artistViewUrl:
        "https://itunes.apple.com/us/artist/michael-jackson/32940?uo=4",
      collectionViewUrl:
        "https://itunes.apple.com/us/album/ben-single-version/159292399?i=159292992&uo=4",
      trackViewUrl:
        "https://itunes.apple.com/us/album/ben-single-version/159292399?i=159292992&uo=4",
      previewUrl:
        "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview111/v4/18/d2/d4/18d2d44b-ac9d-82ac-6099-36f011b0a269/mzaf_47933647443841846.plus.aac.p.m4a",
      artworkUrl30:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/30x30bb.jpg",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg",
      collectionPrice: 16.99,
      trackPrice: -1.0,
      releaseDate: "1972-07-12T07:00:00Z",
      collectionExplicitness: "notExplicit",
      trackExplicitness: "notExplicit",
      discCount: 2,
      discNumber: 1,
      trackCount: 21,
      trackNumber: 6,
      trackTimeMillis: 165799,
      country: "USA",
      currency: "USD",
      primaryGenreName: "Pop",
      isStreamable: false
    }
  ]
};

export default function(state = initialState, action) {

  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        results: action.payload.songs.results
      };
      case SORT_BY:
      if(state.sortBy === action.sorter) {
        return {
          ...state,
          results: [...state.results].reverse()
        };
      } else {
        return {
          ...state,
          results: [...state.results].sort((a, b) => {
            if (action.sorter === "length") {
              return a.trackTimeMillis < b.trackTimeMillis ? 1 : -1;
            }
            if (action.sorter === "genre") {
              return a.primaryGenreName < b.primaryGenreName ? 1 : -1;
            } else if (action.sorter === "price") {
              return a.trackPrice < b.trackPrice ? 1 : -1;
            }
          }),
          sortBy: action.sorter
        };
      }
    default:
      return state;
  }
}
