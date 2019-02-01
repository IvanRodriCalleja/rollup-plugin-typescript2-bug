import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/ColorSquare.gen.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    resolve(),
    typescript({
      include: ["*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)"],
      verbosity: 3,
      compilerOptions: {
        allowJs: true
      },
      rollupCommonJSResolveHack: true,
      clean: true,
      tsconfigDefaults: {
        compilerOptions: {
          declaration: true
        }
      }
    }),
    commonjs()
  ]
};
