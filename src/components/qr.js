import React, { useEffect, useRef } from "react";
import InlineSVG from "svg-inline-react";
import QRCode from "qrcode-svg";

import vcard from 'raw-loader!../../static/vcard.vcf';

import "./qr.less";

const SvgQr = new QRCode({
  content: vcard,
  padding: 1,
  background: '#fff',
  color: '#1d1d1d',
  container: 'svg-viewbox',
  ecl: "L",
  join: true,
  swap: true,
}).svg();

export default function Qr() {
  return (
    <div className="qr">
      <a href="/vcard.vcf">
        <InlineSVG src={SvgQr} />
      </a>
    </div>
  )
}