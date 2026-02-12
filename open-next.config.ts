export default {
  default: {},
  functions: {
    home: {
      patterns: ["/"],
      routes: ["app/page"],
    },
    pageId: {
      patterns: ["/[pageId]"],
      routes: ["app/[pageId]/page"],
    },
    about: {
      patterns: ["/about"],
      routes: ["app/about/page"],
    },
    apiConfig: {
      patterns: ["/api/config"],
      routes: ["app/api/config/route"],
    },
    apiHealth: {
      patterns: ["/api/health"],
      routes: ["app/api/health/route"],
    },
    apiMonitor: {
      patterns: ["/api/monitor"],
      routes: ["app/api/monitor/route"],
    },
    monitorDetail: {
      patterns: ["/monitor/[id]"],
      routes: ["app/monitor/[id]/page"],
    },
  },
};
