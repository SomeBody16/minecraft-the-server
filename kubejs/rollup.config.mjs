import typescript from "@rollup/plugin-typescript";
import { header } from "rollup-plugin-header";

const createConfig = (props) => ({
    input: props.input,
    output: {
        file: props.output,
        format: "iife",
        name: "MinecraftTheServer",
        generatedCode: "es5",
    },
    plugins: [
        typescript({
            target: "es5",
        }),
        header({
            header: "// priority: -1000\n\n",
        }),
    ],
});

export default [
    createConfig({
        input: "src/@startup.ts",
        output: "startup_scripts/src.js",
    }),
    createConfig({
        input: "src/@server.ts",
        output: "server_scripts/src.js",
    }),
];
