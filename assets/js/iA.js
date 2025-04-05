window.watsonAssistantChatOptions = {
    integrationID: "67602b33-b2a4-4d0e-afd6-ee5f66e5e5a8", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "fa0f9b08-ae92-443d-ae3c-07da0fd80bda", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});