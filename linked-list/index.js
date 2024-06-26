import _ from "lodash";

const main = () => {
  const tests = [
    {
      input: {
        linkedList: [
          { id: "b", value: 2, next: "c" },
          { id: "c", value: 3, next: null },
          { id: "a", value: 1, next: "b" },
        ],
        top: "a",
      },
      expected: [1, 2, 3],
    },
    {
      input: {
        linkedList: [
          {
            id: "5d99eb0c-5ad1-4aa4-9f33-a3dc55d6c190",
            value: 9057,
            next: "31f33db6-1984-4402-b436-71ec9afe9358",
          },
          {
            id: "cc90bf7a-fb2e-4658-8993-5a9af81f654a",
            value: 4493,
            next: "db11afa6-36c5-4cf5-8fe0-0643afcc7528",
          },
          {
            id: "38ddbe45-00f3-46ff-868c-34fe7974ca93",
            value: 6175,
            next: "a3c5b6b1-92b2-48bb-aebd-8a10d557c29e",
          },
          {
            id: "b5e5ed8a-2b97-45c7-803b-9dca683509e3",
            value: 3499,
            next: "50263ac7-3c60-4343-8ab4-85f2df600421",
          },
          {
            id: "df58b977-0283-494f-9023-1de2774d34ca",
            value: 7113,
            next: "043e7024-4c53-4667-a0e9-1219bf79ca4c",
          },
          {
            id: "a64f873f-eac6-45d2-9a26-3c54f36db791",
            value: 1569,
            next: "33c012f8-c52c-49eb-9203-5649bf1f4315",
          },
          {
            id: "8a6faa2f-f7f4-4157-9823-26d3ef39ca5e",
            value: 368,
            next: "2108587a-e4c2-4ced-ba77-f845a4308f8d",
          },
          {
            id: "651d527b-fa86-44db-bfce-a06cf7a9a428",
            value: 6423,
            next: "329dfce9-7e49-4e8e-bb2d-28fd3dc0973a",
          },
          {
            id: "76b293d9-b272-4007-bc8b-5a37210d808e",
            value: 366,
            next: "81df7097-6714-4d3d-9e88-23dc8d9e19ce",
          },
          {
            id: "658d2c51-a8a6-410e-a8b1-20b095675c4e",
            value: 4375,
            next: "4709f2cb-c8f9-4a75-a746-6be550e94f3c",
          },
          {
            id: "626bb09d-287d-4579-b276-0395e3285da9",
            value: 1053,
            next: "a6475c6d-1c2c-4980-8bc5-6a35897b6088",
          },
          {
            id: "50b90a95-bf5c-40ac-8afc-acfad3de5fbe",
            value: 7462,
            next: "c8473710-c2cd-4bf2-a787-844ea462a375",
          },
          {
            id: "31d36126-378d-4cac-87ce-65072e703e7e",
            value: 8447,
            next: "7d95ff9e-195c-40f5-aeda-76ddd09f6d4c",
          },
          {
            id: "31f33db6-1984-4402-b436-71ec9afe9358",
            value: 1386,
            next: "e3d6c464-336b-442b-bc39-18eed90c16a3",
          },
          {
            id: "15ad3c03-a8d1-4ef3-9ee1-82512b6c55d3",
            value: 8397,
            next: "da78f1dd-8641-4ec9-bae0-1d75282cb4e4",
          },
          {
            id: "a6475c6d-1c2c-4980-8bc5-6a35897b6088",
            value: 7442,
            next: "83b8ac0c-212b-4ec0-9d58-fc1672a8ebcd",
          },
          {
            id: "8ef786c9-7dbe-43d8-9383-79acf9944755",
            value: 7279,
            next: "b74bddaa-4353-41d8-b8c3-b43d5e832dfc",
          },
          {
            id: "1d40c4ef-dabf-40b9-bcc0-e0878db9ca5c",
            value: 9608,
            next: "adfd62d3-2b78-4b67-8cb9-f8672e2c4fa6",
          },
          {
            id: "dadbca33-c367-41db-aa0e-5edd5e84144d",
            value: 2164,
            next: "72888a46-a4b6-4774-83a4-63b30e881cd9",
          },
          {
            id: "332f4e43-03f7-4059-a50f-4ec66ea7dcbe",
            value: 2545,
            next: "8ef786c9-7dbe-43d8-9383-79acf9944755",
          },
          {
            id: "84777a03-60bc-49e5-8d14-28a72362dc54",
            value: 5266,
            next: "1877aac4-365e-4e3f-bb71-1931c1777972",
          },
          {
            id: "be058e7f-9e4d-4749-93b9-b75f3c3ee96d",
            value: 4112,
            next: "1b538123-843f-482c-a259-3db2248e323a",
          },
          {
            id: "32e771ba-d3d5-46e2-9a61-b275f759ad26",
            value: 4498,
            next: "93429db3-1e17-403f-9024-d35949ef06eb",
          },
          {
            id: "6d157eea-bc37-427d-a597-82198b04dc69",
            value: 8768,
            next: "8e4db7e3-6204-4f5c-adf9-1f104f3aa408",
          },
          {
            id: "2e85f0e7-2ab9-4604-bf13-57552c15be8e",
            value: 207,
            next: "332f4e43-03f7-4059-a50f-4ec66ea7dcbe",
          },
          {
            id: "c691844a-cf67-4c4c-9431-c53f0fc856d4",
            value: 1994,
            next: "651d527b-fa86-44db-bfce-a06cf7a9a428",
          },
          {
            id: "4ead3a10-ac2b-4ccb-b104-48ceb14bd8d6",
            value: 7306,
            next: "5a5e698e-f52e-4b29-93b8-65110b529174",
          },
          {
            id: "2108587a-e4c2-4ced-ba77-f845a4308f8d",
            value: 2537,
            next: "65a0d48e-35ac-48d5-931f-29d2b9c8861e",
          },
          {
            id: "4afe68bc-727e-4124-a840-4315b480d19a",
            value: 6984,
            next: "47542b30-e232-4c34-8a04-39c8835570eb",
          },
          {
            id: "f4bf9b7a-82ce-457e-9dba-8e073a064bd3",
            value: 9663,
            next: "311fee43-a461-45bc-9cb5-1241abd6a319",
          },
          {
            id: "8529f04d-5857-4574-9a7e-b6824ebd8980",
            value: 4514,
            next: "84777a03-60bc-49e5-8d14-28a72362dc54",
          },
          {
            id: "7d95ff9e-195c-40f5-aeda-76ddd09f6d4c",
            value: 2338,
            next: null,
          },
          {
            id: "33c012f8-c52c-49eb-9203-5649bf1f4315",
            value: 7854,
            next: "7c9e0078-4ecb-4108-ac07-ea555fe79f21",
          },
          {
            id: "c1e39b04-4975-494e-b49b-0c5948ad4848",
            value: 5852,
            next: "d2832d1a-0035-4884-a5e3-d9ef1d96f880",
          },
          {
            id: "afc5e888-f614-49f5-98aa-486a609355b4",
            value: 2989,
            next: "df58b977-0283-494f-9023-1de2774d34ca",
          },
          {
            id: "47542b30-e232-4c34-8a04-39c8835570eb",
            value: 6959,
            next: "afc5e888-f614-49f5-98aa-486a609355b4",
          },
          {
            id: "192015a1-38f9-40cb-8b99-10832728a952",
            value: 4715,
            next: "1d40c4ef-dabf-40b9-bcc0-e0878db9ca5c",
          },
          {
            id: "0a8382d0-0663-4951-b677-c0eaf7cc5660",
            value: 459,
            next: "50b90a95-bf5c-40ac-8afc-acfad3de5fbe",
          },
          {
            id: "5807c0d1-f6e5-4b28-acb7-212e6b66fe3a",
            value: 9521,
            next: "8e144b1f-69c4-4d6b-a0cc-cf313ef7e99a",
          },
          {
            id: "8e144b1f-69c4-4d6b-a0cc-cf313ef7e99a",
            value: 1068,
            next: "85d6ec8d-087a-4a59-b3bb-c77a1fe30fd5",
          },
          {
            id: "dc7d3bd2-70df-4f7a-83eb-b1224d0cb14c",
            value: 8646,
            next: "4ead3a10-ac2b-4ccb-b104-48ceb14bd8d6",
          },
          {
            id: "72c555d3-88ab-48a4-ab03-f5e5ed643403",
            value: 7625,
            next: "81904fd7-bcb0-4688-8961-6cf98924309f",
          },
          {
            id: "e3d6c464-336b-442b-bc39-18eed90c16a3",
            value: 3367,
            next: "626bb09d-287d-4579-b276-0395e3285da9",
          },
          {
            id: "50263ac7-3c60-4343-8ab4-85f2df600421",
            value: 4784,
            next: "2e85f0e7-2ab9-4604-bf13-57552c15be8e",
          },
          {
            id: "84c7831a-33be-4b4e-ab6f-42293edc3674",
            value: 890,
            next: "56ca335b-9ad7-45b2-a283-1a2d903b9024",
          },
          {
            id: "cb3b7505-bfaf-4add-951f-73c67b952898",
            value: 4628,
            next: "38ddbe45-00f3-46ff-868c-34fe7974ca93",
          },
          {
            id: "8e4db7e3-6204-4f5c-adf9-1f104f3aa408",
            value: 914,
            next: "b66358cd-5332-4fe4-99a5-218726e27e9c",
          },
          {
            id: "1b538123-843f-482c-a259-3db2248e323a",
            value: 2481,
            next: "243a4294-efe3-47ff-ad1c-f181a431adea",
          },
          {
            id: "298d6ca3-065c-4a7c-94e5-9d7e1af68efc",
            value: 527,
            next: "6d157eea-bc37-427d-a597-82198b04dc69",
          },
          {
            id: "65a0d48e-35ac-48d5-931f-29d2b9c8861e",
            value: 5952,
            next: "84c7831a-33be-4b4e-ab6f-42293edc3674",
          },
          {
            id: "1877aac4-365e-4e3f-bb71-1931c1777972",
            value: 249,
            next: "b5e5ed8a-2b97-45c7-803b-9dca683509e3",
          },
          {
            id: "c8473710-c2cd-4bf2-a787-844ea462a375",
            value: 4742,
            next: "31d36126-378d-4cac-87ce-65072e703e7e",
          },
          {
            id: "5a5e698e-f52e-4b29-93b8-65110b529174",
            value: 3099,
            next: "8a6faa2f-f7f4-4157-9823-26d3ef39ca5e",
          },
          {
            id: "f14d56a1-838b-4977-8eb7-f4a806c210f7",
            value: 2443,
            next: "72c555d3-88ab-48a4-ab03-f5e5ed643403",
          },
          {
            id: "4709f2cb-c8f9-4a75-a746-6be550e94f3c",
            value: 9240,
            next: "be058e7f-9e4d-4749-93b9-b75f3c3ee96d",
          },
          {
            id: "721e6a0c-f371-4cb8-b47e-3538f3e0c433",
            value: 7181,
            next: "5d99eb0c-5ad1-4aa4-9f33-a3dc55d6c190",
          },
          {
            id: "9ff03d07-7b9a-460a-81eb-fbdb13ce6b5c",
            value: 5855,
            next: "15ad3c03-a8d1-4ef3-9ee1-82512b6c55d3",
          },
          {
            id: "32e9ec62-436d-4721-97c1-6570b37a982c",
            value: 1856,
            next: "cb3b7505-bfaf-4add-951f-73c67b952898",
          },
          {
            id: "7343fa7e-042e-4581-8283-fe75368ce598",
            value: 1395,
            next: "9b91e50a-51a8-4364-838b-b0ae06130256",
          },
          {
            id: "33a30c1c-74e5-4676-9f2b-975e96685b88",
            value: 6153,
            next: "babb2991-adc3-4a1b-9c25-ec1c56361bfe",
          },
          {
            id: "043e7024-4c53-4667-a0e9-1219bf79ca4c",
            value: 6873,
            next: "76b293d9-b272-4007-bc8b-5a37210d808e",
          },
          {
            id: "56ca335b-9ad7-45b2-a283-1a2d903b9024",
            value: 5988,
            next: "a1fe2cca-ef18-4698-afc0-ac4df8037bd4",
          },
          {
            id: "adfd62d3-2b78-4b67-8cb9-f8672e2c4fa6",
            value: 7303,
            next: "71891a27-76a6-4a58-a781-446e07a8c441",
          },
          {
            id: "d3a8806c-0998-4155-9755-4c32f4eeda19",
            value: 3323,
            next: "9ff03d07-7b9a-460a-81eb-fbdb13ce6b5c",
          },
          {
            id: "babb2991-adc3-4a1b-9c25-ec1c56361bfe",
            value: 9828,
            next: "c8fb0fdf-f66c-4f53-94f4-f27e286a8b64",
          },
          {
            id: "243a4294-efe3-47ff-ad1c-f181a431adea",
            value: 2265,
            next: "33a30c1c-74e5-4676-9f2b-975e96685b88",
          },
          {
            id: "7c9e0078-4ecb-4108-ac07-ea555fe79f21",
            value: 5514,
            next: "c1e39b04-4975-494e-b49b-0c5948ad4848",
          },
          {
            id: "311fee43-a461-45bc-9cb5-1241abd6a319",
            value: 1219,
            next: "7343fa7e-042e-4581-8283-fe75368ce598",
          },
          {
            id: "5fc02864-2d2c-4a34-9630-c88a9f73f232",
            value: 8472,
            next: "29db7f03-3c16-40f8-aefc-d80835299654",
          },
          {
            id: "29db7f03-3c16-40f8-aefc-d80835299654",
            value: 5083,
            next: "d3a8806c-0998-4155-9755-4c32f4eeda19",
          },
          {
            id: "2b044116-c9a3-406f-b008-de2911bede79",
            value: 7617,
            next: "8205b541-e1f1-4eda-8cfa-c86c8e969759",
          },
          {
            id: "8205b541-e1f1-4eda-8cfa-c86c8e969759",
            value: 2098,
            next: "1626994f-1879-4a5c-becb-3f64832719e5",
          },
          {
            id: "26e163e7-b92c-42c9-9a69-6ed373683ffb",
            value: 9710,
            next: "32e9ec62-436d-4721-97c1-6570b37a982c",
          },
          {
            id: "93429db3-1e17-403f-9024-d35949ef06eb",
            value: 4047,
            next: "4afe68bc-727e-4124-a840-4315b480d19a",
          },
          {
            id: "b74bddaa-4353-41d8-b8c3-b43d5e832dfc",
            value: 4455,
            next: "cc90bf7a-fb2e-4658-8993-5a9af81f654a",
          },
          {
            id: "a9d662e5-b696-4aa5-bcdd-f306f1b7083b",
            value: 5022,
            next: "c691844a-cf67-4c4c-9431-c53f0fc856d4",
          },
          {
            id: "329dfce9-7e49-4e8e-bb2d-28fd3dc0973a",
            value: 997,
            next: "6668a11d-3d74-434c-9305-507d6587e6ee",
          },
          {
            id: "81904fd7-bcb0-4688-8961-6cf98924309f",
            value: 5853,
            next: "8529f04d-5857-4574-9a7e-b6824ebd8980",
          },
          {
            id: "a3c5b6b1-92b2-48bb-aebd-8a10d557c29e",
            value: 936,
            next: "a64f873f-eac6-45d2-9a26-3c54f36db791",
          },
          {
            id: "81df7097-6714-4d3d-9e88-23dc8d9e19ce",
            value: 4212,
            next: "ec81ebc2-6830-41d8-b0cb-335a5cd2741e",
          },
          {
            id: "da78f1dd-8641-4ec9-bae0-1d75282cb4e4",
            value: 2101,
            next: "298d6ca3-065c-4a7c-94e5-9d7e1af68efc",
          },
          {
            id: "9f93fe48-edc5-4f85-bf96-d89956833c6f",
            value: 4285,
            next: "7843151f-57ae-49bd-aa2a-740ea978d608",
          },
          {
            id: "6668a11d-3d74-434c-9305-507d6587e6ee",
            value: 8735,
            next: "30c0f055-1da6-42a0-8e4b-e344f8c27436",
          },
          {
            id: "71891a27-76a6-4a58-a781-446e07a8c441",
            value: 9706,
            next: "f4bf9b7a-82ce-457e-9dba-8e073a064bd3",
          },
          {
            id: "db11afa6-36c5-4cf5-8fe0-0643afcc7528",
            value: 9221,
            next: "721e6a0c-f371-4cb8-b47e-3538f3e0c433",
          },
          {
            id: "f1536448-03a5-4621-8e34-5e7d21d38043",
            value: 8251,
            next: "f14d56a1-838b-4977-8eb7-f4a806c210f7",
          },
          {
            id: "a1fe2cca-ef18-4698-afc0-ac4df8037bd4",
            value: 5483,
            next: "9f93fe48-edc5-4f85-bf96-d89956833c6f",
          },
          {
            id: "1626994f-1879-4a5c-becb-3f64832719e5",
            value: 6488,
            next: "5fc02864-2d2c-4a34-9630-c88a9f73f232",
          },
          {
            id: "ebdfda7c-1d84-4ccb-9115-cc070a4721fa",
            value: 8230,
            next: "26e163e7-b92c-42c9-9a69-6ed373683ffb",
          },
          {
            id: "c5504457-3e47-448e-9d19-020431c2fe73",
            value: 1503,
            next: "32e771ba-d3d5-46e2-9a61-b275f759ad26",
          },
          {
            id: "85d6ec8d-087a-4a59-b3bb-c77a1fe30fd5",
            value: 1890,
            next: "f1536448-03a5-4621-8e34-5e7d21d38043",
          },
          {
            id: "72888a46-a4b6-4774-83a4-63b30e881cd9",
            value: 6698,
            next: "5807c0d1-f6e5-4b28-acb7-212e6b66fe3a",
          },
          {
            id: "d2832d1a-0035-4884-a5e3-d9ef1d96f880",
            value: 3854,
            next: "dadbca33-c367-41db-aa0e-5edd5e84144d",
          },
          {
            id: "b66358cd-5332-4fe4-99a5-218726e27e9c",
            value: 1463,
            next: "a9d662e5-b696-4aa5-bcdd-f306f1b7083b",
          },
          {
            id: "30c0f055-1da6-42a0-8e4b-e344f8c27436",
            value: 8668,
            next: "192015a1-38f9-40cb-8b99-10832728a952",
          },
          {
            id: "9b91e50a-51a8-4364-838b-b0ae06130256",
            value: 8395,
            next: "c5504457-3e47-448e-9d19-020431c2fe73",
          },
          {
            id: "7843151f-57ae-49bd-aa2a-740ea978d608",
            value: 9267,
            next: "658d2c51-a8a6-410e-a8b1-20b095675c4e",
          },
          {
            id: "83b8ac0c-212b-4ec0-9d58-fc1672a8ebcd",
            value: 3925,
            next: "2b044116-c9a3-406f-b008-de2911bede79",
          },
          {
            id: "ec81ebc2-6830-41d8-b0cb-335a5cd2741e",
            value: 8467,
            next: "dc7d3bd2-70df-4f7a-83eb-b1224d0cb14c",
          },
          {
            id: "c8fb0fdf-f66c-4f53-94f4-f27e286a8b64",
            value: 7828,
            next: "0a8382d0-0663-4951-b677-c0eaf7cc5660",
          },
        ],
        top: "ebdfda7c-1d84-4ccb-9115-cc070a4721fa",
      },
      expected: [
        8230, 9710, 1856, 4628, 6175, 936, 1569, 7854, 5514, 5852, 3854, 2164,
        6698, 9521, 1068, 1890, 8251, 2443, 7625, 5853, 4514, 5266, 249, 3499,
        4784, 207, 2545, 7279, 4455, 4493, 9221, 7181, 9057, 1386, 3367, 1053,
        7442, 3925, 7617, 2098, 6488, 8472, 5083, 3323, 5855, 8397, 2101, 527,
        8768, 914, 1463, 5022, 1994, 6423, 997, 8735, 8668, 4715, 9608, 7303,
        9706, 9663, 1219, 1395, 8395, 1503, 4498, 4047, 6984, 6959, 2989, 7113,
        6873, 366, 4212, 8467, 8646, 7306, 3099, 368, 2537, 5952, 890, 5988,
        5483, 4285, 9267, 4375, 9240, 4112, 2481, 2265, 6153, 9828, 7828, 459,
        7462, 4742, 8447, 2338,
      ],
    },
  ];

  for (let i = 0; i < tests.length; ++i) {
    const { input, expected } = tests[i];
    const result = f(input);
    _.isEqual(result, expected)
      ? console.log("PASS")
      : console.log("FAIL: ", result, expected);
  }
};

const f = ({ linkedList, top }) => {
  const lookup = {};
  for (let i = 0; i < linkedList.length; ++i) {
    const item = linkedList[i];
    lookup[item.id] = { value: item.value, next: item.next };
  }

  let current = lookup[top];
  const ans = [current.value];

  while (current.next) {
    current = lookup[current.next];
    ans.push(current.value);
  }

  return ans;
};

main();
