// "use client";

// import type { PutBlobResult } from "@vercel/blob";
// import { useState, useRef } from "react";

// export default function AvatarUploadPage() {
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [blob, setBlob] = useState<PutBlobResult | null>(null);
//   return (
//     <>
//       <h1>Upload Your Avatar</h1>

//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();

//           if (!inputFileRef.current?.files) {
//             throw new Error("No file selected");
//           }

//           const file = inputFileRef.current.files[0];

//           const response = await fetch(
//             `/api/avatar/upload?filename=${file.name}`,
//             {
//               method: "POST",
//               body: file,
//             }
//           );

//           const newBlob = (await response.json()) as PutBlobResult;

//           setBlob(newBlob);
//         }}
//       >
//         <input
//           name="file"
//           ref={inputFileRef}
//           type="file"
//           required
//         />
//         <button type="submit">Upload</button>
//       </form>
//       {blob && (
//         <div>
//           Blob url: <a href={blob.url}>{blob.url}</a>
//         </div>
//       )}
//     </>
//   );
// }

// /// route

// import { put } from "@vercel/blob";
// import { NextResponse } from "next/server";

// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get("filename");

//   // ⚠️ The below code is for App Router Route Handlers only
//   const blob = await put(filename, request.body, {
//     access: "public",
//   });

//   // Here's the code for Pages API Routes:
//   // const blob = await put(filename, request, {
//   //   access: 'public',
//   // });

//   return NextResponse.json(blob);
// }

// // The next lines are required for Pages API Routes only
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };
