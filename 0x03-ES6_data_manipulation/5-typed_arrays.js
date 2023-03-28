export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, 10);
  view.setUint8(position, value);
  return view;
}
