type Params = {
  params: {
    catalogue: string;
    number: string;
  };
};

export async function GET(request: Request, { params }: Params) {
  const { catalogue, number } = params;
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const w = searchParams.get('w');
  const h = searchParams.get('h');

  const upperCasedCatalogue = catalogue.toUpperCase();
  if (['M', 'NGC'].includes(upperCasedCatalogue)) {
    return new Response('Not found catalogue', { status: 404 });
  }

  const res = await fetch(`${process.env.API_URL}/api/placeImages/health`);
  const data = await res.json();

  if (!res.ok) {
    return new Response('Error fetching data', { status: res.status });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
