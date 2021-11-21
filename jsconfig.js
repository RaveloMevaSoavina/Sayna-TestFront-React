{
    "compilerOptions": {
        "module": "es6",
        "target": "es2019",
        "jsx": "react",
        "baseUrl": ".",
        "paths": {
          "@Reducers/*": ["./src/reducers/*"],
          "@Selectors/*": ["./src/selectors/*"],
          "@Components/*": ["./src/components/*"],
          "@App/*": ["./src/components/App/*"],
          "@Footer/*": ["./src/components/Footer/*"],
          "@Header/*": ["./src/components/Header/*"],
      }
    },
    "include" : ["src/**/*"],
    "exclude": ["node_modules", "dist", "config", ".vscode"]
  }