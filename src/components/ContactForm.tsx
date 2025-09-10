export default function ContactForm() {
  return (
    <div id="contact" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

      {/* ✅ JotForm Embed */}
      <iframe
        id="JotFormIFrame-252524713309050"
        title="Contact Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/252524713309050"
        style={{ minWidth: "100%", maxWidth: "100%", height: "600px", border: "none" }}
      ></iframe>

      {/* ✅ JotForm Embed Script */}
      <script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        defer
        onLoad={() => {
          // @ts-ignore
          if (window.jotformEmbedHandler) {
            // @ts-ignore
            window.jotformEmbedHandler(
              "iframe[id='JotFormIFrame-252524713309050']",
              "https://form.jotform.com/"
            );
          }
        }}
      />
    </div>
  );
}