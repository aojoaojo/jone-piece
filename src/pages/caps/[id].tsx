import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PdfViewer() {
  const router = useRouter();
  const { id } = router.query;
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const url = `/assets/caps/${id}.pdf`;
      setPdfUrl(url);
    }
  }, [id]);

  if (!pdfUrl) return <p>Carregando PDF...</p>;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <object
        data={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Não foi possível carregar o PDF.{' '}
        </p>
      </object>
    </div>
  );
}