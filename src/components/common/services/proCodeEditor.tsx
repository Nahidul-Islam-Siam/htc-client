// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import Editor, { OnMount } from "@monaco-editor/react";
// import prettier from "prettier/standalone";

// const Icon = {
//   format: () => <span style={{ fontFamily: "monospace" }}>FMT</span>,
//   copy: () => <span>📋</span>,
//   download: () => <span>⬇️</span>,
//   reset: () => <span>↺</span>,
//   run: () => <span>▶️</span>,
// };

// export type ProCodeEditorProps = {
//   value?: string;
//   defaultValue?: string;
//   language?: "javascript" | "json" | "html" | "css";
//   theme?: "light" | "dark";
//   height?: number | string;
//   filename?: string;
//   readOnly?: boolean;
//   onChange?: (code: string) => void;
//   className?: string;
// };

// const DEFAULT_SNIPPETS: Record<string, string> = {
//   // typescript: `function greet(){\n  return \`Hello, ${name}!\`;\n}\nconsole.log(greet("World"));`,
//   javascript: `const sum = (a, b) => a + b;\nconsole.log(sum(2, 3));`,
//   json: `{"hello": "world", "version": 1}`,
//   html: `<!doctype html><html><head><meta charset=\"utf-8\"/><title>Preview</title></head><body><h1>Hello, Monaco!</h1></body></html>`,
//   css: `:root {--brand: #4f46e5;} .button {background: var(--brand); color: white; padding: 0.5rem 1rem; border-radius: 0.5rem;}`,
// };

// function useClient() {
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => setIsClient(true), []);
//   return isClient;
// }

// export default function ProCodeEditor({
//   value,
//   defaultValue,
//   language = "javascript",
//   theme = "dark",
//   height = 420,
//   filename = "snippet.ts",
//   readOnly = false,
//   onChange,
//   className = "",
// }: ProCodeEditorProps) {
//   const isClient = useClient();
//   const [code, setCode] = useState(
//     () => value ?? defaultValue ?? DEFAULT_SNIPPETS[language]
//   );
//   const [output, setOutput] = useState<string>("");
//   const [editorTheme, setEditorTheme] = useState(theme);
//   const [editorLang, setEditorLang] = useState(language);
//   const [wordWrap, setWordWrap] = useState(false);
//   const [minimap, setMinimap] = useState(true);
//   const editorRef = useRef<any>(null);

//   useEffect(() => {
//     if (typeof value === "string") setCode(value);
//   }, [value]);

//   const handleMount: OnMount = (editor, monaco) => {
//     editorRef.current = editor;
//     editor.updateOptions({
//       tabSize: 2,
//       insertSpaces: true,
//       smoothScrolling: true,
//       formatOnPaste: true,
//       formatOnType: true,
//     });
//     if (monaco?.languages?.typescript) {
//       monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
//         noEmit: true,
//         target: monaco.languages.typescript.ScriptTarget.ES2020,
//         jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
//         allowNonTsExtensions: true,
//         moduleResolution:
//           monaco.languages.typescript.ModuleResolutionKind.NodeJs,
//       });
//     }
//   };

//   const formatCode = useCallback(async () => {
//     try {
//       const parser =
//         editorLang === "javascript"
//           ? "babel"
//           : editorLang === "json"
//             ? "json"
//             : editorLang === "html"
//               ? "html"
//               : editorLang === "css"
//                 ? "css"
//                 : "babel";
//       const formatted = await prettier.format(code, {
//         parser,
//         semi: true,
//         singleQuote: false,
//         tabWidth: 2,
//         trailingComma: "es5",
//       });
//       setCode(formatted);
//       editorRef.current?.setValue(formatted);
//       onChange?.(formatted);
//     } catch (e) {
//       console.warn("Prettier format failed:", e);
//     }
//   }, [code, editorLang, onChange]);

//   const runCode = useCallback(() => {
//     if (editorLang === "javascript") {
//       try {
//         const consoleLogs: string[] = [];
//         const originalConsoleLog = console.log;
//         console.log = (...args: any[]) => {
//           consoleLogs.push(args.join(" "));
//         };
//         new Function(code)();
//         console.log = originalConsoleLog;
//         setOutput(consoleLogs.join("\n"));
//       } catch (err: any) {
//         setOutput(err.message);
//       }
//     } else {
//       setOutput("Output only supported for JavaScript/TypeScript");
//     }
//   }, [code, editorLang]);

//   const doCopy = useCallback(async () => {
//     try {
//       await navigator.clipboard.writeText(code);
//     } catch {}
//   }, [code]);
//   const doDownload = useCallback(() => {
//     const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = filenameFromLang(filename, editorLang);
//     a.click();
//     URL.revokeObjectURL(url);
//   }, [code, filename, editorLang]);
//   const onReset = useCallback(() => {
//     const next = defaultValue ?? DEFAULT_SNIPPETS[editorLang];
//     setCode(next);
//     editorRef.current?.setValue(next);
//     setOutput("");
//     onChange?.(next);
//   }, [defaultValue, editorLang, onChange]);

//   const wrapperClass = useMemo(
//     () =>
//       `w-full rounded-2xl border shadow-sm ${editorTheme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"} ${className}`,
//     [editorTheme, className]
//   );

//   if (!isClient)
//     return (
//       <div className={wrapperClass} style={{ height }}>
//         <div className="p-4 text-sm opacity-70">Loading editor…</div>
//       </div>
//     );

//   return (
//     <div
//       className={`${wrapperClass} flex flex-col md:flex-row ${
//         editorTheme === "dark" ? "text-white" : "text-black"
//       }`}
//     >
//       <div className="flex-1">
//         <div
//           className={`flex flex-wrap items-center gap-2 p-3 border-b ${
//             editorTheme === "dark" ? "border-zinc-800" : "border-gray-300"
//           }`}
//         >
//           <div
//             className={`font-medium text-sm px-2 py-1 rounded ${
//               editorTheme === "dark" ? "bg-white/5" : "bg-black/5"
//             }`}
//           >
//             ProCodeEditor
//           </div>

//           <select
//             className={`ml-2 px-2 py-1 rounded border text-sm bg-transparent ${
//               editorTheme === "dark"
//                 ? "border-gray-600 !text-white"
//                 : "border-gray-400 !text-black"
//             }`}
//             value={editorLang}
//             onChange={(e) => setEditorLang(e.target.value as any)}
//           >
//             <option value="javascript">JavaScript</option>
//             <option value="json">JSON</option>
//             <option value="html">HTML</option>
//             <option value="css">CSS</option>
//           </select>

//           <select
//             className={`px-2 py-1 rounded border text-sm bg-transparent ${
//               editorTheme === "dark"
//                 ? "border-gray-600 text-white bg-black"
//                 : "border-gray-400 text-black bg-white"
//             }`}
//             value={editorTheme}
//             onChange={(e) => setEditorTheme(e.target.value as any)}
//           >
//             <option value="dark">Dark</option>
//             <option value="light">Light</option>
//           </select>

//           <label className="ml-2 inline-flex items-center gap-1 text-sm">
//             <input
//               type="checkbox"
//               checked={wordWrap}
//               onChange={(e) => setWordWrap(e.target.checked)}
//             />{" "}
//             Word wrap
//           </label>

//           <label className="inline-flex items-center gap-1 text-sm">
//             <input
//               type="checkbox"
//               checked={minimap}
//               onChange={(e) => setMinimap(e.target.checked)}
//             />{" "}
//             Minimap
//           </label>

//           <div className="ml-auto flex items-center gap-2">
//             <button
//               onClick={formatCode}
//               className={`px-2 py-1 text-sm rounded border hover:bg-black/5 dark:hover:bg-white/10 ${
//                 editorTheme === "dark"
//                   ? "text-white border-gray-600"
//                   : "text-black border-gray-400"
//               }`}
//             >
//               <Icon.format /> Format
//             </button>
//             <button
//               onClick={runCode}
//               className={`px-2 py-1 text-sm rounded border hover:bg-black/5 dark:hover:bg-white/10 ${
//                 editorTheme === "dark"
//                   ? "text-white border-gray-600"
//                   : "text-black border-gray-400"
//               }`}
//             >
//               <Icon.run /> Run
//             </button>
//             <button
//               onClick={doCopy}
//               className={`px-2 py-1 text-sm rounded border hover:bg-black/5 dark:hover:bg-white/10 ${
//                 editorTheme === "dark"
//                   ? "text-white border-gray-600"
//                   : "text-black border-gray-400"
//               }`}
//             >
//               <Icon.copy /> Copy
//             </button>
//             <button
//               onClick={doDownload}
//               className={`px-2 py-1 text-sm rounded border hover:bg-black/5 dark:hover:bg-white/10 ${
//                 editorTheme === "dark"
//                   ? "text-white border-gray-600"
//                   : "text-black border-gray-400"
//               }`}
//             >
//               <Icon.download /> Download
//             </button>
//             <button
//               onClick={onReset}
//               className={`px-2 py-1 text-sm rounded border hover:bg-black/5 dark:hover:bg-white/10 ${
//                 editorTheme === "dark"
//                   ? "text-white border-gray-600"
//                   : "text-black border-gray-400"
//               }`}
//             >
//               <Icon.reset /> Reset
//             </button>
//           </div>
//         </div>

//         <Editor
//           value={code}
//           onChange={(val) => {
//             const v = val ?? "";
//             setCode(v);
//             onChange?.(v);
//           }}
//           height={height}
//           theme={editorTheme === "dark" ? "vs-dark" : "light"}
//           language={editorLang}
//           onMount={handleMount}
//           options={{
//             readOnly,
//             wordWrap: wordWrap ? "on" : "off",
//             minimap: { enabled: minimap },
//             scrollBeyondLastLine: false,
//             roundedSelection: true,
//             automaticLayout: true,
//             padding: { top: 8, bottom: 8 },
//           }}
//         />
//       </div>

//       <div
//         className={`mt-2 md:mt-0 md:ml-4 w-full md:w-1/3 p-3 rounded font-mono whitespace-pre-wrap min-h-[60px] ${
//           editorTheme === "dark"
//             ? "bg-zinc-800 text-white"
//             : "bg-gray-100 text-black"
//         }`}
//       >
//         {output}
//       </div>
//     </div>
//   );
// }

// function filenameFromLang(base: string, lang: string) {
//   const map: Record<string, string> = {
//     javascript: ".js",
//     json: ".json",
//     html: ".html",
//     css: ".css",
//   };
//   const ext = map[lang] ?? "";
//   if (base.endsWith(ext)) return base;
//   return base.replace(/\.[^.]+$/, "") + ext;
// }
