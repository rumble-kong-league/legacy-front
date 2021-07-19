import React from "react";
import Head from "next/head";

import { provenance } from "../../components/ipfs_hashes";

export const short = (s) => `${s.substr(0, 7)}...${s.substr(s.length - 3, 3)}`;

const Provenance = () => (
  <>
    <Head>
      <link href="https://fonts.cdnfonts.com/css/strasua" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
        rel="stylesheet"
      />
      <title>RKL Provenance</title>
    </Head>
    <div
      id="provenance"
      className="flex flex-col items-center justify-center px-5p text-white mb-16 mt-16 font-sans"
    >
      <div
        className="flex flex-col justify-between text-center"
        data-aos="fade"
      >
        <h2 className="font-sans mb-2  text-3xl yl-400 mb-3">Provenance</h2>
        <div className="w-20 h-0.5 bg-yellow-400  self-center mb-8"></div>
      </div>

      <div className="flex flex-col text-left font-serif mb-8">
        <p>
          <span className="font-sans">
            <b>OG IX</b>
          </span>{" "}
          - original index of the generated Rumble Kong
        </p>
        <p>
          <span className="font-sans">
            <b>IX</b>
          </span>{" "}
          - after the sell out or after a day (whichever is the soonest), a
          random starting index is generated.{" "}
          <b>OG IX = (IX + startingIndex) MOD 10000</b>
          <br />
          You can also show that assigned index is (og ix + tokenID) MOD
          startingIndex for all og ix &#8805; startingIndex, and just tokenID
          for all og ix &#60; startingIndex.
        </p>
        <p>
          The starting index has been set by a member of community at{" "}
          <b>8607</b>.
        </p>
        <p>
          <span className="font-sans">
            <b>SHA256</b>
          </span>{" "}
          - image sha256 hash
        </p>
        <p>
          <span className="font-sans">
            <b>IPFS</b>
          </span>{" "}
          - image IPFS CID (content ID)
        </p>
        <p>
          <span className="font-sans">
            <b>ARWEAVE</b>
          </span>{" "}
          - arweave data transaction ID
        </p>
        <div>
          <br />
          RKL Provenance is computed by concatenating the sha256 hashes of the
          art pieces in the <b>OG IX</b> order, and taking sha256 hash of the
          <br />
          concatenated <b>utf-8</b> encoded string. This value is: <br />
          <div className="text-center">
            <b>
              7f8a31458635d2bd059dd45e72ce7ee53ba6fe4d9d85c089a5d28e17208021cc
            </b>
          </div>
          <br />
          This value has been set in the contract.
        </div>
      </div>

      <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div
                className="shadow overflow-hidden border-b border-white-200 sm:rounded-lg"
                style={{ maxHeight: "566px", overflowY: "scroll" }}
              >
                <table className="min-w-full divide-y divide-white-200">
                  <thead className="bg-yellow-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                      >
                        og ix
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                      >
                        ix
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                      >
                        sha256
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
                      >
                        ipfs
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider relative"
                      >
                        arweave
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-black divide-y divide-white">
                    {provenance.map((p) => (
                      <tr key={p.old_ix}>
                        <td
                          style={{ width: "10px" }}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                        >
                          {p.old_ix}
                        </td>
                        <td
                          style={{ width: "10px" }}
                          className="px-6 py-4 whitespace-nowrap text-sm text-white"
                        >
                          {p.new_ix}
                        </td>
                        <td
                          style={{ width: "100px" }}
                          className="px-6 py-4 whitespace-nowrap text-sm text-white font-serif"
                        >
                          {p.sha256}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white font-serif">
                          {p.ipfs}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {p.arweave}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
      className="w-10/12 h-0.5 bg-offwhite   hidden 0xl:block"
      data-aos="fade"
    ></div> */}
    </div>
  </>
);
// ------------------------------------------------------------------------------------------------------- //

Provenance.displayName = "Provenance";
export default Provenance;
