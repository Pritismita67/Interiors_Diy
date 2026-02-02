import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'DIY Interiors',
  description: 'Professional design. Your execution. Your budget.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}