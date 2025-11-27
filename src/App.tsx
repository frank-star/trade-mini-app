import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AppProviders } from '@/app/providers';
import { TradePage } from '@/pages/trade';
import { PositionsPage } from '@/pages/positions';
import { RewardsPage } from '@/pages/rewards';
import { ProfilePage } from '@/pages/profile';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Routes>
          <Route path="/" element={<Navigate to="/trade" replace />} />
          <Route path="/trade" element={<TradePage />} />
          <Route path="/positions" element={<PositionsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
