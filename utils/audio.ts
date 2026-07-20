// Synthesized Web Audio API Paper Flip Rustle Sound (0 external files needed)
export function playPaperSound() {
  if (typeof window === 'undefined') return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const bufferSize = ctx.sampleRate * 0.18; // 180ms duration
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Pink noise / paper rustle friction synthesis
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      b6 = white * 0.115926;

      // Envelope: quick attack, paper drag decay
      const progress = i / bufferSize;
      const envelope = Math.sin(progress * Math.PI) * Math.pow(1 - progress, 0.8);
      data[i] = (pink / 15) * envelope * 0.25;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Highpass filter to emulate crisp dry newsprint paper friction
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.18);

    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 250);
  } catch {
    // Ignore audio context errors on un-interacted browsers
  }
}
