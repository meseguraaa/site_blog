// next.config.ts
import type { NextConfig } from "next";

import { withContentlayer } from 'next-contentlayer2';

const nextConfig = {
  reactStrictMode: true,

  // 👇 Desativa o logo/indicador do Next no dev
  devIndicators: {
    buildActivity: false,   // desliga o “N” de atividade de build/refresh
    appIsrStatus: false,    // (opcional) esconde o indicador de ISR
    // buildActivityPosition: 'bottom-right', // opcional se quiser mover
  },
} satisfies NextConfig;

export default withContentlayer(nextConfig);
