import React from "react";

export default function LoadingInfo() {
  return (
    <>
      <div className="loadingInfo">
        <div className="transferring">Transferring...</div>
        <div className="sending">Sending 1 file</div>
        <div className="loadingProgress">13.4 MB of 73 MB uploaded</div>
        <div className="loadingProgress">About 2 minutes remaining</div>
      </div>
    </>
  );
}
