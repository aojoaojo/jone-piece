import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PdfViewer() {
  const router = useRouter();
  const { id } = router.query;
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const url = `/caps/${id}.pdf`;
      setPdfUrl(url);
    }
  }, [id]);

  if (!pdfUrl) return <p>Carregando PDF...</p>;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={pdfUrl}
        style={{
          width: '100%',
          height: 'calc(100vh - 20px)',
          maxHeight: '100%',
        }}
      >
        <p style={{ textAlign: 'center', padding: '10px' }}>
          Não foi possível carregar o PDF.
        </p>
      </iframe>
    </div>
  );
}