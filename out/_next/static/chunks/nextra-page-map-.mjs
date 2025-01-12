import meta from "../../../pages/_meta.js";
import checkchan_meta from "../../../pages/checkchan/_meta.js";
import serverchan3_meta from "../../../pages/serverchan3/_meta.js";
import serverchan3_app_meta from "../../../pages/serverchan3/app/_meta.js";
import serverchan3_compatibility_meta from "../../../pages/serverchan3/compatibility/_meta.js";
import serverchan3_server_meta from "../../../pages/serverchan3/server/_meta.js";
import serverchan3_usecase_meta from "../../../pages/serverchan3/usecase/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "checkchan",
  route: "/checkchan",
  children: [{
    data: checkchan_meta
  }, {
    name: "index",
    route: "/checkchan",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "serverchan3",
  route: "/serverchan3",
  children: [{
    data: serverchan3_meta
  }, {
    name: "app",
    route: "/serverchan3/app",
    children: [{
      data: serverchan3_app_meta
    }, {
      name: "install",
      route: "/serverchan3/app/install",
      frontMatter: {
        "sidebarTitle": "Install"
      }
    }, {
      name: "use",
      route: "/serverchan3/app/use",
      frontMatter: {
        "sidebarTitle": "Use"
      }
    }]
  }, {
    name: "changelog",
    route: "/serverchan3/changelog",
    frontMatter: {
      "sidebarTitle": "Changelog"
    }
  }, {
    name: "compatibility",
    route: "/serverchan3/compatibility",
    children: [{
      data: serverchan3_compatibility_meta
    }, {
      name: "sct-forward",
      route: "/serverchan3/compatibility/sct-forward",
      frontMatter: {
        "sidebarTitle": "Sct Forward"
      }
    }]
  }, {
    name: "faq",
    route: "/serverchan3/faq",
    frontMatter: {
      "sidebarTitle": "Faq"
    }
  }, {
    name: "index",
    route: "/serverchan3",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "privacy",
    route: "/serverchan3/privacy",
    children: [{
      name: "android",
      route: "/serverchan3/privacy/android",
      frontMatter: {
        "sidebarTitle": "Android"
      }
    }, {
      name: "ios",
      route: "/serverchan3/privacy/ios",
      frontMatter: {
        "sidebarTitle": "iOS"
      }
    }]
  }, {
    name: "server",
    route: "/serverchan3/server",
    children: [{
      data: serverchan3_server_meta
    }, {
      name: "api",
      route: "/serverchan3/server/api",
      frontMatter: {
        "sidebarTitle": "API"
      }
    }, {
      name: "sdk",
      route: "/serverchan3/server/sdk",
      frontMatter: {
        "sidebarTitle": "Sdk"
      }
    }]
  }, {
    name: "usecase",
    route: "/serverchan3/usecase",
    children: [{
      data: serverchan3_usecase_meta
    }, {
      name: "webmonitor",
      route: "/serverchan3/usecase/webmonitor",
      frontMatter: {
        "sidebarTitle": "Webmonitor"
      }
    }]
  }]
}];