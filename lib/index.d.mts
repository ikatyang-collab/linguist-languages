export type LanguageName =
  | '1C Enterprise'
  | '2-Dimensional Array'
  | '4D'
  | 'ABAP'
  | 'ABAP CDS'
  | 'ABNF'
  | 'AGS Script'
  | 'AIDL'
  | 'AL'
  | 'AMPL'
  | 'ANTLR'
  | 'API Blueprint'
  | 'APL'
  | 'ASL'
  | 'ASN.1'
  | 'ASP.NET'
  | 'ATS'
  | 'ActionScript'
  | 'Ada'
  | 'Adblock Filter List'
  | 'Adobe Font Metrics'
  | 'Agda'
  | 'Aiken'
  | 'Alloy'
  | 'Alpine Abuild'
  | 'Altium Designer'
  | 'AngelScript'
  | 'Answer Set Programming'
  | 'Ant Build System'
  | 'Antlers'
  | 'ApacheConf'
  | 'Apex'
  | 'Apollo Guidance Computer'
  | 'AppleScript'
  | 'Arc'
  | 'AsciiDoc'
  | 'AspectJ'
  | 'Assembly'
  | 'Astro'
  | 'Asymptote'
  | 'Augeas'
  | 'AutoHotkey'
  | 'AutoIt'
  | 'Avro IDL'
  | 'Awk'
  | 'B4X'
  | 'BASIC'
  | 'BQN'
  | 'Ballerina'
  | 'Batchfile'
  | 'Beef'
  | 'Befunge'
  | 'Berry'
  | 'BibTeX'
  | 'BibTeX Style'
  | 'Bicep'
  | 'Bikeshed'
  | 'Bison'
  | 'BitBake'
  | 'Blade'
  | 'BlitzBasic'
  | 'BlitzMax'
  | 'Bluespec'
  | 'Bluespec BH'
  | 'Boo'
  | 'Boogie'
  | 'Brainfuck'
  | 'BrighterScript'
  | 'Brightscript'
  | 'Browserslist'
  | 'BuildStream'
  | 'C'
  | 'C#'
  | 'C++'
  | 'C-ObjDump'
  | 'C2hs Haskell'
  | 'CAP CDS'
  | 'CIL'
  | 'CLIPS'
  | 'CMake'
  | 'COBOL'
  | 'CODEOWNERS'
  | 'COLLADA'
  | 'CSON'
  | 'CSS'
  | 'CSV'
  | 'CUE'
  | 'CWeb'
  | 'Cabal Config'
  | 'Caddyfile'
  | 'Cadence'
  | 'Cairo'
  | 'Cairo Zero'
  | 'CameLIGO'
  | "Cap'n Proto"
  | 'Carbon'
  | 'CartoCSS'
  | 'Ceylon'
  | 'Chapel'
  | 'Charity'
  | 'Checksums'
  | 'ChucK'
  | 'Circom'
  | 'Cirru'
  | 'Clarion'
  | 'Clarity'
  | 'Classic ASP'
  | 'Clean'
  | 'Click'
  | 'Clojure'
  | 'Closure Templates'
  | 'Cloud Firestore Security Rules'
  | 'Clue'
  | 'CoNLL-U'
  | 'CodeQL'
  | 'CoffeeScript'
  | 'ColdFusion'
  | 'ColdFusion CFC'
  | 'Common Lisp'
  | 'Common Workflow Language'
  | 'Component Pascal'
  | 'Cool'
  | 'Cpp-ObjDump'
  | 'Creole'
  | 'Crystal'
  | 'Csound'
  | 'Csound Document'
  | 'Csound Score'
  | 'Cuda'
  | 'Cue Sheet'
  | 'Curry'
  | 'Cycript'
  | 'Cylc'
  | 'Cypher'
  | 'Cython'
  | 'D'
  | 'D-ObjDump'
  | 'D2'
  | 'DIGITAL Command Language'
  | 'DM'
  | 'DNS Zone'
  | 'DTrace'
  | 'Dafny'
  | 'Darcs Patch'
  | 'Dart'
  | 'Daslang'
  | 'DataWeave'
  | 'Debian Package Control File'
  | 'DenizenScript'
  | 'Dhall'
  | 'Diff'
  | 'DirectX 3D File'
  | 'Dockerfile'
  | 'Dogescript'
  | 'Dotenv'
  | 'Dune'
  | 'Dylan'
  | 'E'
  | 'E-mail'
  | 'EBNF'
  | 'ECL'
  | 'ECLiPSe'
  | 'EJS'
  | 'EQ'
  | 'Eagle'
  | 'Earthly'
  | 'Easybuild'
  | 'Ecere Projects'
  | 'Ecmarkup'
  | 'Edge'
  | 'EdgeQL'
  | 'EditorConfig'
  | 'Edje Data Collection'
  | 'Eiffel'
  | 'Elixir'
  | 'Elm'
  | 'Elvish'
  | 'Elvish Transcript'
  | 'Emacs Lisp'
  | 'EmberScript'
  | 'Erlang'
  | 'Euphoria'
  | 'F#'
  | 'F*'
  | 'FIGlet Font'
  | 'FIRRTL'
  | 'FLUX'
  | 'Factor'
  | 'Fancy'
  | 'Fantom'
  | 'Faust'
  | 'Fennel'
  | 'Filebench WML'
  | 'Filterscript'
  | 'Fluent'
  | 'Formatted'
  | 'Forth'
  | 'Fortran'
  | 'Fortran Free Form'
  | 'FreeBASIC'
  | 'FreeMarker'
  | 'Frege'
  | 'Futhark'
  | 'G-code'
  | 'GAML'
  | 'GAMS'
  | 'GAP'
  | 'GCC Machine Description'
  | 'GDB'
  | 'GDScript'
  | 'GDShader'
  | 'GEDCOM'
  | 'GLSL'
  | 'GN'
  | 'GSC'
  | 'Game Maker Language'
  | 'Gemfile.lock'
  | 'Gemini'
  | 'Genero 4gl'
  | 'Genero per'
  | 'Genie'
  | 'Genshi'
  | 'Gentoo Ebuild'
  | 'Gentoo Eclass'
  | 'Gerber Image'
  | 'Gettext Catalog'
  | 'Gherkin'
  | 'Git Attributes'
  | 'Git Config'
  | 'Git Revision List'
  | 'Gleam'
  | 'Glimmer JS'
  | 'Glimmer TS'
  | 'Glyph'
  | 'Glyph Bitmap Distribution Format'
  | 'Gnuplot'
  | 'Go'
  | 'Go Checksums'
  | 'Go Module'
  | 'Go Workspace'
  | 'Godot Resource'
  | 'Golo'
  | 'Gosu'
  | 'Grace'
  | 'Gradle'
  | 'Gradle Kotlin DSL'
  | 'Grammatical Framework'
  | 'Graph Modeling Language'
  | 'GraphQL'
  | 'Graphviz (DOT)'
  | 'Groovy'
  | 'Groovy Server Pages'
  | 'HAProxy'
  | 'HCL'
  | 'HIP'
  | 'HLSL'
  | 'HOCON'
  | 'HTML'
  | 'HTML+ECR'
  | 'HTML+EEX'
  | 'HTML+ERB'
  | 'HTML+PHP'
  | 'HTML+Razor'
  | 'HTTP'
  | 'HXML'
  | 'Hack'
  | 'Haml'
  | 'Handlebars'
  | 'Harbour'
  | 'Hare'
  | 'Haskell'
  | 'Haxe'
  | 'HiveQL'
  | 'HolyC'
  | 'Hosts File'
  | 'Hy'
  | 'HyPhy'
  | 'IDL'
  | 'IGOR Pro'
  | 'INI'
  | 'IRC log'
  | 'ISPC'
  | 'Idris'
  | 'Ignore List'
  | 'ImageJ Macro'
  | 'Imba'
  | 'Inform 7'
  | 'Ink'
  | 'Inno Setup'
  | 'Io'
  | 'Ioke'
  | 'Isabelle'
  | 'Isabelle ROOT'
  | 'J'
  | 'JAR Manifest'
  | 'JCL'
  | 'JFlex'
  | 'JSON'
  | 'JSON with Comments'
  | 'JSON5'
  | 'JSONLD'
  | 'JSONiq'
  | 'Jai'
  | 'Janet'
  | 'Jasmin'
  | 'Java'
  | 'Java Properties'
  | 'Java Server Pages'
  | 'Java Template Engine'
  | 'JavaScript'
  | 'JavaScript+ERB'
  | 'Jest Snapshot'
  | 'JetBrains MPS'
  | 'Jinja'
  | 'Jison'
  | 'Jison Lex'
  | 'Jolie'
  | 'Jsonnet'
  | 'Julia'
  | 'Julia REPL'
  | 'Jupyter Notebook'
  | 'Just'
  | 'KDL'
  | 'KRL'
  | 'Kaitai Struct'
  | 'KakouneScript'
  | 'KerboScript'
  | 'KiCad Layout'
  | 'KiCad Legacy Layout'
  | 'KiCad Schematic'
  | 'Kickstart'
  | 'Kit'
  | 'Koka'
  | 'Kotlin'
  | 'Kusto'
  | 'LFE'
  | 'LLVM'
  | 'LOLCODE'
  | 'LSL'
  | 'LTspice Symbol'
  | 'LabVIEW'
  | 'Lark'
  | 'Lasso'
  | 'Latte'
  | 'Lean'
  | 'Lean 4'
  | 'Leo'
  | 'Less'
  | 'Lex'
  | 'LigoLANG'
  | 'LilyPond'
  | 'Limbo'
  | 'Linear Programming'
  | 'Linker Script'
  | 'Linux Kernel Module'
  | 'Liquid'
  | 'Literate Agda'
  | 'Literate CoffeeScript'
  | 'Literate Haskell'
  | 'LiveCode Script'
  | 'LiveScript'
  | 'Logos'
  | 'Logtalk'
  | 'LookML'
  | 'LoomScript'
  | 'Lua'
  | 'Luau'
  | 'M'
  | 'M3U'
  | 'M4'
  | 'M4Sugar'
  | 'MATLAB'
  | 'MAXScript'
  | 'MDX'
  | 'MLIR'
  | 'MQL4'
  | 'MQL5'
  | 'MTML'
  | 'MUF'
  | 'Macaulay2'
  | 'Makefile'
  | 'Mako'
  | 'Markdown'
  | 'Marko'
  | 'Mask'
  | 'Mathematica'
  | 'Maven POM'
  | 'Max'
  | 'Mercury'
  | 'Mermaid'
  | 'Meson'
  | 'Metal'
  | 'Microsoft Developer Studio Project'
  | 'Microsoft Visual Studio Solution'
  | 'MiniD'
  | 'MiniYAML'
  | 'MiniZinc'
  | 'MiniZinc Data'
  | 'Mint'
  | 'Mirah'
  | 'Modelica'
  | 'Modula-2'
  | 'Modula-3'
  | 'Module Management System'
  | 'Mojo'
  | 'Monkey'
  | 'Monkey C'
  | 'Moocode'
  | 'MoonBit'
  | 'MoonScript'
  | 'Motoko'
  | 'Motorola 68K Assembly'
  | 'Move'
  | 'Muse'
  | 'Mustache'
  | 'Myghty'
  | 'NASL'
  | 'NCL'
  | 'NEON'
  | 'NL'
  | 'NMODL'
  | 'NPM Config'
  | 'NSIS'
  | 'NWScript'
  | 'Nasal'
  | 'Nearley'
  | 'Nemerle'
  | 'NetLinx'
  | 'NetLinx+ERB'
  | 'NetLogo'
  | 'NewLisp'
  | 'Nextflow'
  | 'Nginx'
  | 'Nim'
  | 'Ninja'
  | 'Nit'
  | 'Nix'
  | 'Noir'
  | 'Nu'
  | 'NumPy'
  | 'Nunjucks'
  | 'Nushell'
  | 'OASv2-json'
  | 'OASv2-yaml'
  | 'OASv3-json'
  | 'OASv3-yaml'
  | 'OCaml'
  | 'OMNeT++ MSG'
  | 'OMNeT++ NED'
  | 'Oberon'
  | 'ObjDump'
  | 'Object Data Instance Notation'
  | 'ObjectScript'
  | 'Objective-C'
  | 'Objective-C++'
  | 'Objective-J'
  | 'Odin'
  | 'Omgrofl'
  | 'Opa'
  | 'Opal'
  | 'Open Policy Agent'
  | 'OpenAPI Specification v2'
  | 'OpenAPI Specification v3'
  | 'OpenCL'
  | 'OpenEdge ABL'
  | 'OpenQASM'
  | 'OpenRC runscript'
  | 'OpenSCAD'
  | 'OpenStep Property List'
  | 'OpenType Feature File'
  | 'Option List'
  | 'Org'
  | 'OverpassQL'
  | 'Ox'
  | 'Oxygene'
  | 'Oz'
  | 'P4'
  | 'PDDL'
  | 'PEG.js'
  | 'PHP'
  | 'PLSQL'
  | 'PLpgSQL'
  | 'POV-Ray SDL'
  | 'Pact'
  | 'Pan'
  | 'Papyrus'
  | 'Parrot'
  | 'Parrot Assembly'
  | 'Parrot Internal Representation'
  | 'Pascal'
  | 'Pawn'
  | 'Pep8'
  | 'Perl'
  | 'Pic'
  | 'Pickle'
  | 'PicoLisp'
  | 'PigLatin'
  | 'Pike'
  | 'Pip Requirements'
  | 'Pkl'
  | 'PlantUML'
  | 'Pod'
  | 'Pod 6'
  | 'PogoScript'
  | 'Polar'
  | 'Pony'
  | 'Portugol'
  | 'PostCSS'
  | 'PostScript'
  | 'PowerBuilder'
  | 'PowerShell'
  | 'Praat'
  | 'Prisma'
  | 'Processing'
  | 'Procfile'
  | 'Proguard'
  | 'Prolog'
  | 'Promela'
  | 'Propeller Spin'
  | 'Protocol Buffer'
  | 'Protocol Buffer Text Format'
  | 'Public Key'
  | 'Pug'
  | 'Puppet'
  | 'Pure Data'
  | 'PureBasic'
  | 'PureScript'
  | 'Pyret'
  | 'Python'
  | 'Python console'
  | 'Python traceback'
  | 'Q#'
  | 'QML'
  | 'QMake'
  | 'Qt Script'
  | 'Quake'
  | 'QuickBASIC'
  | 'R'
  | 'RAML'
  | 'RBS'
  | 'RDoc'
  | 'REALbasic'
  | 'REXX'
  | 'RMarkdown'
  | 'RON'
  | 'RPC'
  | 'RPGLE'
  | 'RPM Spec'
  | 'RUNOFF'
  | 'Racket'
  | 'Ragel'
  | 'Raku'
  | 'Rascal'
  | 'Raw token data'
  | 'ReScript'
  | 'Readline Config'
  | 'Reason'
  | 'ReasonLIGO'
  | 'Rebol'
  | 'Record Jar'
  | 'Red'
  | 'Redcode'
  | 'Redirect Rules'
  | 'Regular Expression'
  | "Ren'Py"
  | 'RenderScript'
  | 'Rez'
  | 'Rich Text Format'
  | 'Ring'
  | 'Riot'
  | 'RobotFramework'
  | 'Roc'
  | 'Rocq Prover'
  | 'Roff'
  | 'Roff Manpage'
  | 'Rouge'
  | 'RouterOS Script'
  | 'Ruby'
  | 'Rust'
  | 'SAS'
  | 'SCSS'
  | 'SELinux Policy'
  | 'SMT'
  | 'SPARQL'
  | 'SQF'
  | 'SQL'
  | 'SQLPL'
  | 'SRecode Template'
  | 'SSH Config'
  | 'STAR'
  | 'STL'
  | 'STON'
  | 'SVG'
  | 'SWIG'
  | 'Sage'
  | 'Sail'
  | 'SaltStack'
  | 'Sass'
  | 'Scala'
  | 'Scaml'
  | 'Scenic'
  | 'Scheme'
  | 'Scilab'
  | 'Self'
  | 'ShaderLab'
  | 'Shell'
  | 'ShellCheck Config'
  | 'ShellSession'
  | 'Shen'
  | 'Sieve'
  | 'Simple File Verification'
  | 'Singularity'
  | 'Slang'
  | 'Slash'
  | 'Slice'
  | 'Slim'
  | 'Slint'
  | 'SmPL'
  | 'Smali'
  | 'Smalltalk'
  | 'Smarty'
  | 'Smithy'
  | 'Snakemake'
  | 'Solidity'
  | 'Soong'
  | 'SourcePawn'
  | 'Spline Font Database'
  | 'Squirrel'
  | 'Stan'
  | 'Standard ML'
  | 'Starlark'
  | 'Stata'
  | 'StringTemplate'
  | 'Stylus'
  | 'SubRip Text'
  | 'SugarSS'
  | 'SuperCollider'
  | 'Survex data'
  | 'Svelte'
  | 'Sway'
  | 'Sweave'
  | 'Swift'
  | 'SystemVerilog'
  | 'TI Program'
  | 'TL-Verilog'
  | 'TLA'
  | 'TOML'
  | 'TSPLIB data'
  | 'TSQL'
  | 'TSV'
  | 'TSX'
  | 'TXL'
  | 'Tact'
  | 'Talon'
  | 'Tcl'
  | 'Tcsh'
  | 'TeX'
  | 'Tea'
  | 'Terra'
  | 'Terraform Template'
  | 'Texinfo'
  | 'Text'
  | 'TextGrid'
  | 'TextMate Properties'
  | 'Textile'
  | 'Thrift'
  | 'Toit'
  | 'Tor Config'
  | 'Tree-sitter Query'
  | 'Turing'
  | 'Turtle'
  | 'Twig'
  | 'Type Language'
  | 'TypeScript'
  | 'TypeSpec'
  | 'Typst'
  | 'Unified Parallel C'
  | 'Unity3D Asset'
  | 'Unix Assembly'
  | 'Uno'
  | 'UnrealScript'
  | 'Untyped Plutus Core'
  | 'UrWeb'
  | 'V'
  | 'VBA'
  | 'VBScript'
  | 'VCL'
  | 'VHDL'
  | 'Vala'
  | 'Valve Data Format'
  | 'Velocity Template Language'
  | 'Vento'
  | 'Verilog'
  | 'Vim Help File'
  | 'Vim Script'
  | 'Vim Snippet'
  | 'Visual Basic .NET'
  | 'Visual Basic 6.0'
  | 'Volt'
  | 'Vue'
  | 'Vyper'
  | 'WDL'
  | 'WGSL'
  | 'Wavefront Material'
  | 'Wavefront Object'
  | 'Web Ontology Language'
  | 'WebAssembly'
  | 'WebAssembly Interface Type'
  | 'WebIDL'
  | 'WebVTT'
  | 'Wget Config'
  | 'Whiley'
  | 'Wikitext'
  | 'Win32 Message File'
  | 'Windows Registry Entries'
  | 'Witcher Script'
  | 'Wollok'
  | 'World of Warcraft Addon Data'
  | 'Wren'
  | 'X BitMap'
  | 'X Font Directory Index'
  | 'X PixMap'
  | 'X10'
  | 'XC'
  | 'XCompose'
  | 'XML'
  | 'XML Property List'
  | 'XPages'
  | 'XProc'
  | 'XQuery'
  | 'XS'
  | 'XSLT'
  | 'Xmake'
  | 'Xojo'
  | 'Xonsh'
  | 'Xtend'
  | 'YAML'
  | 'YANG'
  | 'YARA'
  | 'YASnippet'
  | 'Yacc'
  | 'Yul'
  | 'ZAP'
  | 'ZIL'
  | 'Zeek'
  | 'ZenScript'
  | 'Zephir'
  | 'Zig'
  | 'Zimpl'
  | 'Zmodel'
  | 'cURL Config'
  | 'crontab'
  | 'desktop'
  | 'dircolors'
  | 'eC'
  | 'edn'
  | 'fish'
  | 'hoon'
  | 'iCalendar'
  | 'jq'
  | 'kvlang'
  | 'mIRC Script'
  | 'mcfunction'
  | 'mdsvex'
  | 'mupad'
  | 'nanorc'
  | 'nesC'
  | 'ooc'
  | 'q'
  | 'reStructuredText'
  | 'robots.txt'
  | 'sed'
  | 'templ'
  | 'vCard'
  | 'wisp'
  | 'xBase'

export interface Language {
  /**
   * Language name.
   */
  name: string
  /**
   * Either data, programming, markup, prose, or nil
   */
  type: string
  /**
   * CSS hex color to represent the language. Only used if type is "programming" or "markup".
   */
  color?: string
  /**
   * An Array of associated extensions (the first one is
   * considered the primary extension, the others should be
   * listed alphabetically)
   */
  extensions?: string[]
  /**
   * The TextMate scope that represents this programming
   * language. This should match one of the scopes listed in
   * the grammars.yml file. Use "none" if there is no grammar
   * for this language.
   */
  tmScope: string
  /**
   * A String name of the Ace Mode used for highlighting whenever
   * a file is edited. This must match one of the filenames in https://gh.io/acemodes.
   * Use "text" if a mode does not exist.
   */
  aceMode: string
  /**
   * Integer used as a language-name-independent indexed field so that we can rename
   * languages in Linguist without reindexing all the code on GitHub. Must not be
   * changed for existing languages without the explicit permission of GitHub staff.
   */
  languageId: number
  /**
   * An Array of additional aliases (implicitly
   * includes name.downcase)
   */
  aliases?: string[]
  /**
   * A String name of the CodeMirror Mode used for highlighting whenever a file is edited.
   * This must match a mode from https://git.io/vi9Fx
   */
  codemirrorMode?: string
  /**
   * A String name of the file mime type used for highlighting whenever a file is edited.
   * This should match the `mime` associated with the mode from https://git.io/f4SoQ
   */
  codemirrorMimeType?: string
  /**
   * An Array of associated interpreters
   */
  interpreters?: string[]
  /**
   * Name of the parent language. Languages in a group are counted
   * in the statistics as the parent language.
   */
  group?: string
  /**
   * An Array of filenames commonly associated with the language
   */
  filenames?: string[]
  /**
   * Boolean wrap to enable line wrapping (default: false)
   */
  wrap?: boolean
}

export {
  Language as '1C Enterprise',
  Language as '2-Dimensional Array',
  Language as '4D',
  Language as 'ABAP',
  Language as 'ABAP CDS',
  Language as 'ABNF',
  Language as 'AGS Script',
  Language as 'AIDL',
  Language as 'AL',
  Language as 'AMPL',
  Language as 'ANTLR',
  Language as 'API Blueprint',
  Language as 'APL',
  Language as 'ASL',
  Language as 'ASN.1',
  Language as 'ASP.NET',
  Language as 'ATS',
  Language as 'ActionScript',
  Language as 'Ada',
  Language as 'Adblock Filter List',
  Language as 'Adobe Font Metrics',
  Language as 'Agda',
  Language as 'Aiken',
  Language as 'Alloy',
  Language as 'Alpine Abuild',
  Language as 'Altium Designer',
  Language as 'AngelScript',
  Language as 'Answer Set Programming',
  Language as 'Ant Build System',
  Language as 'Antlers',
  Language as 'ApacheConf',
  Language as 'Apex',
  Language as 'Apollo Guidance Computer',
  Language as 'AppleScript',
  Language as 'Arc',
  Language as 'AsciiDoc',
  Language as 'AspectJ',
  Language as 'Assembly',
  Language as 'Astro',
  Language as 'Asymptote',
  Language as 'Augeas',
  Language as 'AutoHotkey',
  Language as 'AutoIt',
  Language as 'Avro IDL',
  Language as 'Awk',
  Language as 'B4X',
  Language as 'BASIC',
  Language as 'BQN',
  Language as 'Ballerina',
  Language as 'Batchfile',
  Language as 'Beef',
  Language as 'Befunge',
  Language as 'Berry',
  Language as 'BibTeX',
  Language as 'BibTeX Style',
  Language as 'Bicep',
  Language as 'Bikeshed',
  Language as 'Bison',
  Language as 'BitBake',
  Language as 'Blade',
  Language as 'BlitzBasic',
  Language as 'BlitzMax',
  Language as 'Bluespec',
  Language as 'Bluespec BH',
  Language as 'Boo',
  Language as 'Boogie',
  Language as 'Brainfuck',
  Language as 'BrighterScript',
  Language as 'Brightscript',
  Language as 'Browserslist',
  Language as 'BuildStream',
  Language as 'C',
  Language as 'C#',
  Language as 'C++',
  Language as 'C-ObjDump',
  Language as 'C2hs Haskell',
  Language as 'CAP CDS',
  Language as 'CIL',
  Language as 'CLIPS',
  Language as 'CMake',
  Language as 'COBOL',
  Language as 'CODEOWNERS',
  Language as 'COLLADA',
  Language as 'CSON',
  Language as 'CSS',
  Language as 'CSV',
  Language as 'CUE',
  Language as 'CWeb',
  Language as 'Cabal Config',
  Language as 'Caddyfile',
  Language as 'Cadence',
  Language as 'Cairo',
  Language as 'Cairo Zero',
  Language as 'CameLIGO',
  Language as "Cap'n Proto",
  Language as 'Carbon',
  Language as 'CartoCSS',
  Language as 'Ceylon',
  Language as 'Chapel',
  Language as 'Charity',
  Language as 'Checksums',
  Language as 'ChucK',
  Language as 'Circom',
  Language as 'Cirru',
  Language as 'Clarion',
  Language as 'Clarity',
  Language as 'Classic ASP',
  Language as 'Clean',
  Language as 'Click',
  Language as 'Clojure',
  Language as 'Closure Templates',
  Language as 'Cloud Firestore Security Rules',
  Language as 'Clue',
  Language as 'CoNLL-U',
  Language as 'CodeQL',
  Language as 'CoffeeScript',
  Language as 'ColdFusion',
  Language as 'ColdFusion CFC',
  Language as 'Common Lisp',
  Language as 'Common Workflow Language',
  Language as 'Component Pascal',
  Language as 'Cool',
  Language as 'Cpp-ObjDump',
  Language as 'Creole',
  Language as 'Crystal',
  Language as 'Csound',
  Language as 'Csound Document',
  Language as 'Csound Score',
  Language as 'Cuda',
  Language as 'Cue Sheet',
  Language as 'Curry',
  Language as 'Cycript',
  Language as 'Cylc',
  Language as 'Cypher',
  Language as 'Cython',
  Language as 'D',
  Language as 'D-ObjDump',
  Language as 'D2',
  Language as 'DIGITAL Command Language',
  Language as 'DM',
  Language as 'DNS Zone',
  Language as 'DTrace',
  Language as 'Dafny',
  Language as 'Darcs Patch',
  Language as 'Dart',
  Language as 'Daslang',
  Language as 'DataWeave',
  Language as 'Debian Package Control File',
  Language as 'DenizenScript',
  Language as 'Dhall',
  Language as 'Diff',
  Language as 'DirectX 3D File',
  Language as 'Dockerfile',
  Language as 'Dogescript',
  Language as 'Dotenv',
  Language as 'Dune',
  Language as 'Dylan',
  Language as 'E',
  Language as 'E-mail',
  Language as 'EBNF',
  Language as 'ECL',
  Language as 'ECLiPSe',
  Language as 'EJS',
  Language as 'EQ',
  Language as 'Eagle',
  Language as 'Earthly',
  Language as 'Easybuild',
  Language as 'Ecere Projects',
  Language as 'Ecmarkup',
  Language as 'Edge',
  Language as 'EdgeQL',
  Language as 'EditorConfig',
  Language as 'Edje Data Collection',
  Language as 'Eiffel',
  Language as 'Elixir',
  Language as 'Elm',
  Language as 'Elvish',
  Language as 'Elvish Transcript',
  Language as 'Emacs Lisp',
  Language as 'EmberScript',
  Language as 'Erlang',
  Language as 'Euphoria',
  Language as 'F#',
  Language as 'F*',
  Language as 'FIGlet Font',
  Language as 'FIRRTL',
  Language as 'FLUX',
  Language as 'Factor',
  Language as 'Fancy',
  Language as 'Fantom',
  Language as 'Faust',
  Language as 'Fennel',
  Language as 'Filebench WML',
  Language as 'Filterscript',
  Language as 'Fluent',
  Language as 'Formatted',
  Language as 'Forth',
  Language as 'Fortran',
  Language as 'Fortran Free Form',
  Language as 'FreeBASIC',
  Language as 'FreeMarker',
  Language as 'Frege',
  Language as 'Futhark',
  Language as 'G-code',
  Language as 'GAML',
  Language as 'GAMS',
  Language as 'GAP',
  Language as 'GCC Machine Description',
  Language as 'GDB',
  Language as 'GDScript',
  Language as 'GDShader',
  Language as 'GEDCOM',
  Language as 'GLSL',
  Language as 'GN',
  Language as 'GSC',
  Language as 'Game Maker Language',
  Language as 'Gemfile.lock',
  Language as 'Gemini',
  Language as 'Genero 4gl',
  Language as 'Genero per',
  Language as 'Genie',
  Language as 'Genshi',
  Language as 'Gentoo Ebuild',
  Language as 'Gentoo Eclass',
  Language as 'Gerber Image',
  Language as 'Gettext Catalog',
  Language as 'Gherkin',
  Language as 'Git Attributes',
  Language as 'Git Config',
  Language as 'Git Revision List',
  Language as 'Gleam',
  Language as 'Glimmer JS',
  Language as 'Glimmer TS',
  Language as 'Glyph',
  Language as 'Glyph Bitmap Distribution Format',
  Language as 'Gnuplot',
  Language as 'Go',
  Language as 'Go Checksums',
  Language as 'Go Module',
  Language as 'Go Workspace',
  Language as 'Godot Resource',
  Language as 'Golo',
  Language as 'Gosu',
  Language as 'Grace',
  Language as 'Gradle',
  Language as 'Gradle Kotlin DSL',
  Language as 'Grammatical Framework',
  Language as 'Graph Modeling Language',
  Language as 'GraphQL',
  Language as 'Graphviz (DOT)',
  Language as 'Groovy',
  Language as 'Groovy Server Pages',
  Language as 'HAProxy',
  Language as 'HCL',
  Language as 'HIP',
  Language as 'HLSL',
  Language as 'HOCON',
  Language as 'HTML',
  Language as 'HTML+ECR',
  Language as 'HTML+EEX',
  Language as 'HTML+ERB',
  Language as 'HTML+PHP',
  Language as 'HTML+Razor',
  Language as 'HTTP',
  Language as 'HXML',
  Language as 'Hack',
  Language as 'Haml',
  Language as 'Handlebars',
  Language as 'Harbour',
  Language as 'Hare',
  Language as 'Haskell',
  Language as 'Haxe',
  Language as 'HiveQL',
  Language as 'HolyC',
  Language as 'Hosts File',
  Language as 'Hy',
  Language as 'HyPhy',
  Language as 'IDL',
  Language as 'IGOR Pro',
  Language as 'INI',
  Language as 'IRC log',
  Language as 'ISPC',
  Language as 'Idris',
  Language as 'Ignore List',
  Language as 'ImageJ Macro',
  Language as 'Imba',
  Language as 'Inform 7',
  Language as 'Ink',
  Language as 'Inno Setup',
  Language as 'Io',
  Language as 'Ioke',
  Language as 'Isabelle',
  Language as 'Isabelle ROOT',
  Language as 'J',
  Language as 'JAR Manifest',
  Language as 'JCL',
  Language as 'JFlex',
  Language as 'JSON',
  Language as 'JSON with Comments',
  Language as 'JSON5',
  Language as 'JSONLD',
  Language as 'JSONiq',
  Language as 'Jai',
  Language as 'Janet',
  Language as 'Jasmin',
  Language as 'Java',
  Language as 'Java Properties',
  Language as 'Java Server Pages',
  Language as 'Java Template Engine',
  Language as 'JavaScript',
  Language as 'JavaScript+ERB',
  Language as 'Jest Snapshot',
  Language as 'JetBrains MPS',
  Language as 'Jinja',
  Language as 'Jison',
  Language as 'Jison Lex',
  Language as 'Jolie',
  Language as 'Jsonnet',
  Language as 'Julia',
  Language as 'Julia REPL',
  Language as 'Jupyter Notebook',
  Language as 'Just',
  Language as 'KDL',
  Language as 'KRL',
  Language as 'Kaitai Struct',
  Language as 'KakouneScript',
  Language as 'KerboScript',
  Language as 'KiCad Layout',
  Language as 'KiCad Legacy Layout',
  Language as 'KiCad Schematic',
  Language as 'Kickstart',
  Language as 'Kit',
  Language as 'Koka',
  Language as 'Kotlin',
  Language as 'Kusto',
  Language as 'LFE',
  Language as 'LLVM',
  Language as 'LOLCODE',
  Language as 'LSL',
  Language as 'LTspice Symbol',
  Language as 'LabVIEW',
  Language as 'Lark',
  Language as 'Lasso',
  Language as 'Latte',
  Language as 'Lean',
  Language as 'Lean 4',
  Language as 'Leo',
  Language as 'Less',
  Language as 'Lex',
  Language as 'LigoLANG',
  Language as 'LilyPond',
  Language as 'Limbo',
  Language as 'Linear Programming',
  Language as 'Linker Script',
  Language as 'Linux Kernel Module',
  Language as 'Liquid',
  Language as 'Literate Agda',
  Language as 'Literate CoffeeScript',
  Language as 'Literate Haskell',
  Language as 'LiveCode Script',
  Language as 'LiveScript',
  Language as 'Logos',
  Language as 'Logtalk',
  Language as 'LookML',
  Language as 'LoomScript',
  Language as 'Lua',
  Language as 'Luau',
  Language as 'M',
  Language as 'M3U',
  Language as 'M4',
  Language as 'M4Sugar',
  Language as 'MATLAB',
  Language as 'MAXScript',
  Language as 'MDX',
  Language as 'MLIR',
  Language as 'MQL4',
  Language as 'MQL5',
  Language as 'MTML',
  Language as 'MUF',
  Language as 'Macaulay2',
  Language as 'Makefile',
  Language as 'Mako',
  Language as 'Markdown',
  Language as 'Marko',
  Language as 'Mask',
  Language as 'Mathematica',
  Language as 'Maven POM',
  Language as 'Max',
  Language as 'Mercury',
  Language as 'Mermaid',
  Language as 'Meson',
  Language as 'Metal',
  Language as 'Microsoft Developer Studio Project',
  Language as 'Microsoft Visual Studio Solution',
  Language as 'MiniD',
  Language as 'MiniYAML',
  Language as 'MiniZinc',
  Language as 'MiniZinc Data',
  Language as 'Mint',
  Language as 'Mirah',
  Language as 'Modelica',
  Language as 'Modula-2',
  Language as 'Modula-3',
  Language as 'Module Management System',
  Language as 'Mojo',
  Language as 'Monkey',
  Language as 'Monkey C',
  Language as 'Moocode',
  Language as 'MoonBit',
  Language as 'MoonScript',
  Language as 'Motoko',
  Language as 'Motorola 68K Assembly',
  Language as 'Move',
  Language as 'Muse',
  Language as 'Mustache',
  Language as 'Myghty',
  Language as 'NASL',
  Language as 'NCL',
  Language as 'NEON',
  Language as 'NL',
  Language as 'NMODL',
  Language as 'NPM Config',
  Language as 'NSIS',
  Language as 'NWScript',
  Language as 'Nasal',
  Language as 'Nearley',
  Language as 'Nemerle',
  Language as 'NetLinx',
  Language as 'NetLinx+ERB',
  Language as 'NetLogo',
  Language as 'NewLisp',
  Language as 'Nextflow',
  Language as 'Nginx',
  Language as 'Nim',
  Language as 'Ninja',
  Language as 'Nit',
  Language as 'Nix',
  Language as 'Noir',
  Language as 'Nu',
  Language as 'NumPy',
  Language as 'Nunjucks',
  Language as 'Nushell',
  Language as 'OASv2-json',
  Language as 'OASv2-yaml',
  Language as 'OASv3-json',
  Language as 'OASv3-yaml',
  Language as 'OCaml',
  Language as 'OMNeT++ MSG',
  Language as 'OMNeT++ NED',
  Language as 'Oberon',
  Language as 'ObjDump',
  Language as 'Object Data Instance Notation',
  Language as 'ObjectScript',
  Language as 'Objective-C',
  Language as 'Objective-C++',
  Language as 'Objective-J',
  Language as 'Odin',
  Language as 'Omgrofl',
  Language as 'Opa',
  Language as 'Opal',
  Language as 'Open Policy Agent',
  Language as 'OpenAPI Specification v2',
  Language as 'OpenAPI Specification v3',
  Language as 'OpenCL',
  Language as 'OpenEdge ABL',
  Language as 'OpenQASM',
  Language as 'OpenRC runscript',
  Language as 'OpenSCAD',
  Language as 'OpenStep Property List',
  Language as 'OpenType Feature File',
  Language as 'Option List',
  Language as 'Org',
  Language as 'OverpassQL',
  Language as 'Ox',
  Language as 'Oxygene',
  Language as 'Oz',
  Language as 'P4',
  Language as 'PDDL',
  Language as 'PEG.js',
  Language as 'PHP',
  Language as 'PLSQL',
  Language as 'PLpgSQL',
  Language as 'POV-Ray SDL',
  Language as 'Pact',
  Language as 'Pan',
  Language as 'Papyrus',
  Language as 'Parrot',
  Language as 'Parrot Assembly',
  Language as 'Parrot Internal Representation',
  Language as 'Pascal',
  Language as 'Pawn',
  Language as 'Pep8',
  Language as 'Perl',
  Language as 'Pic',
  Language as 'Pickle',
  Language as 'PicoLisp',
  Language as 'PigLatin',
  Language as 'Pike',
  Language as 'Pip Requirements',
  Language as 'Pkl',
  Language as 'PlantUML',
  Language as 'Pod',
  Language as 'Pod 6',
  Language as 'PogoScript',
  Language as 'Polar',
  Language as 'Pony',
  Language as 'Portugol',
  Language as 'PostCSS',
  Language as 'PostScript',
  Language as 'PowerBuilder',
  Language as 'PowerShell',
  Language as 'Praat',
  Language as 'Prisma',
  Language as 'Processing',
  Language as 'Procfile',
  Language as 'Proguard',
  Language as 'Prolog',
  Language as 'Promela',
  Language as 'Propeller Spin',
  Language as 'Protocol Buffer',
  Language as 'Protocol Buffer Text Format',
  Language as 'Public Key',
  Language as 'Pug',
  Language as 'Puppet',
  Language as 'Pure Data',
  Language as 'PureBasic',
  Language as 'PureScript',
  Language as 'Pyret',
  Language as 'Python',
  Language as 'Python console',
  Language as 'Python traceback',
  Language as 'Q#',
  Language as 'QML',
  Language as 'QMake',
  Language as 'Qt Script',
  Language as 'Quake',
  Language as 'QuickBASIC',
  Language as 'R',
  Language as 'RAML',
  Language as 'RBS',
  Language as 'RDoc',
  Language as 'REALbasic',
  Language as 'REXX',
  Language as 'RMarkdown',
  Language as 'RON',
  Language as 'RPC',
  Language as 'RPGLE',
  Language as 'RPM Spec',
  Language as 'RUNOFF',
  Language as 'Racket',
  Language as 'Ragel',
  Language as 'Raku',
  Language as 'Rascal',
  Language as 'Raw token data',
  Language as 'ReScript',
  Language as 'Readline Config',
  Language as 'Reason',
  Language as 'ReasonLIGO',
  Language as 'Rebol',
  Language as 'Record Jar',
  Language as 'Red',
  Language as 'Redcode',
  Language as 'Redirect Rules',
  Language as 'Regular Expression',
  Language as "Ren'Py",
  Language as 'RenderScript',
  Language as 'Rez',
  Language as 'Rich Text Format',
  Language as 'Ring',
  Language as 'Riot',
  Language as 'RobotFramework',
  Language as 'Roc',
  Language as 'Rocq Prover',
  Language as 'Roff',
  Language as 'Roff Manpage',
  Language as 'Rouge',
  Language as 'RouterOS Script',
  Language as 'Ruby',
  Language as 'Rust',
  Language as 'SAS',
  Language as 'SCSS',
  Language as 'SELinux Policy',
  Language as 'SMT',
  Language as 'SPARQL',
  Language as 'SQF',
  Language as 'SQL',
  Language as 'SQLPL',
  Language as 'SRecode Template',
  Language as 'SSH Config',
  Language as 'STAR',
  Language as 'STL',
  Language as 'STON',
  Language as 'SVG',
  Language as 'SWIG',
  Language as 'Sage',
  Language as 'Sail',
  Language as 'SaltStack',
  Language as 'Sass',
  Language as 'Scala',
  Language as 'Scaml',
  Language as 'Scenic',
  Language as 'Scheme',
  Language as 'Scilab',
  Language as 'Self',
  Language as 'ShaderLab',
  Language as 'Shell',
  Language as 'ShellCheck Config',
  Language as 'ShellSession',
  Language as 'Shen',
  Language as 'Sieve',
  Language as 'Simple File Verification',
  Language as 'Singularity',
  Language as 'Slang',
  Language as 'Slash',
  Language as 'Slice',
  Language as 'Slim',
  Language as 'Slint',
  Language as 'SmPL',
  Language as 'Smali',
  Language as 'Smalltalk',
  Language as 'Smarty',
  Language as 'Smithy',
  Language as 'Snakemake',
  Language as 'Solidity',
  Language as 'Soong',
  Language as 'SourcePawn',
  Language as 'Spline Font Database',
  Language as 'Squirrel',
  Language as 'Stan',
  Language as 'Standard ML',
  Language as 'Starlark',
  Language as 'Stata',
  Language as 'StringTemplate',
  Language as 'Stylus',
  Language as 'SubRip Text',
  Language as 'SugarSS',
  Language as 'SuperCollider',
  Language as 'Survex data',
  Language as 'Svelte',
  Language as 'Sway',
  Language as 'Sweave',
  Language as 'Swift',
  Language as 'SystemVerilog',
  Language as 'TI Program',
  Language as 'TL-Verilog',
  Language as 'TLA',
  Language as 'TOML',
  Language as 'TSPLIB data',
  Language as 'TSQL',
  Language as 'TSV',
  Language as 'TSX',
  Language as 'TXL',
  Language as 'Tact',
  Language as 'Talon',
  Language as 'Tcl',
  Language as 'Tcsh',
  Language as 'TeX',
  Language as 'Tea',
  Language as 'Terra',
  Language as 'Terraform Template',
  Language as 'Texinfo',
  Language as 'Text',
  Language as 'TextGrid',
  Language as 'TextMate Properties',
  Language as 'Textile',
  Language as 'Thrift',
  Language as 'Toit',
  Language as 'Tor Config',
  Language as 'Tree-sitter Query',
  Language as 'Turing',
  Language as 'Turtle',
  Language as 'Twig',
  Language as 'Type Language',
  Language as 'TypeScript',
  Language as 'TypeSpec',
  Language as 'Typst',
  Language as 'Unified Parallel C',
  Language as 'Unity3D Asset',
  Language as 'Unix Assembly',
  Language as 'Uno',
  Language as 'UnrealScript',
  Language as 'Untyped Plutus Core',
  Language as 'UrWeb',
  Language as 'V',
  Language as 'VBA',
  Language as 'VBScript',
  Language as 'VCL',
  Language as 'VHDL',
  Language as 'Vala',
  Language as 'Valve Data Format',
  Language as 'Velocity Template Language',
  Language as 'Vento',
  Language as 'Verilog',
  Language as 'Vim Help File',
  Language as 'Vim Script',
  Language as 'Vim Snippet',
  Language as 'Visual Basic .NET',
  Language as 'Visual Basic 6.0',
  Language as 'Volt',
  Language as 'Vue',
  Language as 'Vyper',
  Language as 'WDL',
  Language as 'WGSL',
  Language as 'Wavefront Material',
  Language as 'Wavefront Object',
  Language as 'Web Ontology Language',
  Language as 'WebAssembly',
  Language as 'WebAssembly Interface Type',
  Language as 'WebIDL',
  Language as 'WebVTT',
  Language as 'Wget Config',
  Language as 'Whiley',
  Language as 'Wikitext',
  Language as 'Win32 Message File',
  Language as 'Windows Registry Entries',
  Language as 'Witcher Script',
  Language as 'Wollok',
  Language as 'World of Warcraft Addon Data',
  Language as 'Wren',
  Language as 'X BitMap',
  Language as 'X Font Directory Index',
  Language as 'X PixMap',
  Language as 'X10',
  Language as 'XC',
  Language as 'XCompose',
  Language as 'XML',
  Language as 'XML Property List',
  Language as 'XPages',
  Language as 'XProc',
  Language as 'XQuery',
  Language as 'XS',
  Language as 'XSLT',
  Language as 'Xmake',
  Language as 'Xojo',
  Language as 'Xonsh',
  Language as 'Xtend',
  Language as 'YAML',
  Language as 'YANG',
  Language as 'YARA',
  Language as 'YASnippet',
  Language as 'Yacc',
  Language as 'Yul',
  Language as 'ZAP',
  Language as 'ZIL',
  Language as 'Zeek',
  Language as 'ZenScript',
  Language as 'Zephir',
  Language as 'Zig',
  Language as 'Zimpl',
  Language as 'Zmodel',
  Language as 'cURL Config',
  Language as 'crontab',
  Language as 'desktop',
  Language as 'dircolors',
  Language as 'eC',
  Language as 'edn',
  Language as 'fish',
  Language as 'hoon',
  Language as 'iCalendar',
  Language as 'jq',
  Language as 'kvlang',
  Language as 'mIRC Script',
  Language as 'mcfunction',
  Language as 'mdsvex',
  Language as 'mupad',
  Language as 'nanorc',
  Language as 'nesC',
  Language as 'ooc',
  Language as 'q',
  Language as 'reStructuredText',
  Language as 'robots.txt',
  Language as 'sed',
  Language as 'templ',
  Language as 'vCard',
  Language as 'wisp',
  Language as 'xBase',
}
