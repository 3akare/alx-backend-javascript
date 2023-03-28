export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  } else {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer, 0, 10);
    view.setUint8(position, value);
    return view;
  }
}
