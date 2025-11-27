import { useState } from 'react';

import type { Wallet } from '@/entities/wallet';

const MOCK_ADDRESSES = [
  '0xAbC1234567890DEF1234567890ABC123456789012F',
  '0x1234567890ABCDEF1234567890ABCDEF12345678',
  '0xFEDCBA0987654321FEDCBA0987654321FEDCBA09',
];

function generateMockAddress(): string {
  return MOCK_ADDRESSES[Math.floor(Math.random() * MOCK_ADDRESSES.length)];
}

export function useWalletMock() {
  const [wallet, setWallet] = useState<Wallet>({
    address: '',
    isConnected: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const connect = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setWallet({
        address: generateMockAddress(),
        isConnected: true,
        balance: 15000.0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = () => {
    setWallet({
      address: '',
      isConnected: false,
    });
  };

  return {
    wallet,
    connect,
    disconnect,
    isLoading,
  };
}
