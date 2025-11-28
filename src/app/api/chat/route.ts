import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      // Mock response for development/testing
      console.warn('N8N_WEBHOOK_URL not set, using mock response');
      return NextResponse.json({
        message: 'Dies ist eine Mock-Antwort. Bitte konfigurieren Sie N8N_WEBHOOK_URL in .env.local',
        text: 'Dies ist eine Mock-Antwort. Bitte konfigurieren Sie N8N_WEBHOOK_URL in .env.local',
      });
    }

    // Forward message to n8n workflow
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: sessionId || `session-${Date.now()}`,
        action: 'sendMessage',
        chatInput: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook failed: ${response.statusText}`);
    }

    const data = await response.json();

    // Parse the response from n8n
    // The response format depends on your n8n workflow output
    let parsedResponse = {
      message: '',
      text: '',
      boatResults: [] as any[],
    };

    // Try to extract message from different possible response formats
    if (data.output) {
      // If n8n returns { output: "message" }
      parsedResponse.message = data.output;
      parsedResponse.text = data.output;
    } else if (data.text) {
      parsedResponse.message = data.text;
      parsedResponse.text = data.text;
    } else if (data.message) {
      parsedResponse.message = data.message;
      parsedResponse.text = data.message;
    } else if (typeof data === 'string') {
      parsedResponse.message = data;
      parsedResponse.text = data;
    }

    // Try to extract boat results if available
    if (data.availabilities && Array.isArray(data.availabilities)) {
      parsedResponse.boatResults = data.availabilities.map((boat: any) => ({
        boatName: boat.boatName || boat.name,
        departurePort: boat.departurePort || boat.port,
        startDate: boat.startDate || boat.dateDepart,
        endDate: boat.endDate || boat.dateArrivee,
        priceGross: boat.priceGross || boat.prix || 0,
        priceNet: boat.priceNet || boat.prixLocationRemise || boat.priceGross || 0,
        discount: (boat.priceGross || 0) - (boat.priceNet || boat.prixLocationRemise || boat.priceGross || 0),
        maxGuests: boat.maxGuests || boat.nbpersonnesmax || 0,
        cabins: boat.cabins || boat.cabines || '',
      }));
    }

    return NextResponse.json(parsedResponse);
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process message',
        message: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        text: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      },
      { status: 500 }
    );
  }
}

