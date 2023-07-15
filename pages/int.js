import React from 'react'

const IntrinsicsCheckPage = ({ modifiedIntrinsics }) => {
  return (
    <div>
      <h1>Modified Intrinsics</h1>
      {
        Object.keys(modifiedIntrinsics).map(intrinsic => (
          <div key={intrinsic}>
            <h2>{intrinsic}</h2>
            <ul>
              {modifiedIntrinsics[intrinsic].map(method => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  // Save initial state of intrinsics
  const originalIntrinsics = {
    Array: [...Object.getOwnPropertyNames(Array.prototype)],
    String: [...Object.getOwnPropertyNames(String.prototype)],
    JSON: [...Object.getOwnPropertyNames(JSON)],
    ArrayBuffer: [...Object.getOwnPropertyNames(ArrayBuffer.prototype)],
    RegExp: [...Object.getOwnPropertyNames(RegExp.prototype)],
    // TypedArray doesn't have a single prototype. It's a group of similar constructors like Int8Array, Uint8Array, Float32Array, etc.
    // You would need to add entries for each of them if you want to check them all.
    // For example, for Int8Array:
    Int8Array: [...Object.getOwnPropertyNames(Int8Array.prototype)],
    // ...and so on for other TypedArray constructors you want to check.
    // Note that not all environments (like older Node.js versions) support all TypedArray constructors.
  };
  

  // A list of modules you want to check
  const modulesToCheck = [
    "dotenv",
    "eslint",
    "eslint-config-next",
    "fs",
    "gif-decoder",
    "jest",
    "lodash.debounce",
    "next",
    "png-js",
    "react",
    "react-dom",
    "react-firebase-hooks",
    "react-hot-toast",
    "react-markdown"
  ];
  

  const modifiedIntrinsics = {};

  for (const moduleName of modulesToCheck) {
    await import(moduleName);

    // Check intrinsics
for (let intrinsic in originalIntrinsics) {
    console.log("$%$", intrinsic);
    if (originalIntrinsics.hasOwnProperty(intrinsic)) {
      const currentMethods = Object.getOwnPropertyNames(global[intrinsic].prototype);
  
      // Check for removed methods
      originalIntrinsics[intrinsic].forEach(method => {
        if (!currentMethods.includes(method)) {
          if (!modifiedIntrinsics[intrinsic]) {
            modifiedIntrinsics[intrinsic] = [];
          }
          modifiedIntrinsics[intrinsic].push(`${method} was deleted after importing ${moduleName}`);
        }
      });
  
      // Check for added methods
      currentMethods.forEach(method => {
        if (!originalIntrinsics[intrinsic].includes(method)) {
          if (!modifiedIntrinsics[intrinsic]) {
            modifiedIntrinsics[intrinsic] = [];
          }
          modifiedIntrinsics[intrinsic].push(`${method} was added after importing ${moduleName}`);
        }
      });
    }
  }
  
  }

  return {
    props: { modifiedIntrinsics }, // will be passed to the page component as props
  }
}

export default IntrinsicsCheckPage;
