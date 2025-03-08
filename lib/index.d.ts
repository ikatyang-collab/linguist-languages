type LanguageName =
  | "1C Enterprise"
  | "2-Dimensional Array"
  | "4D"
  | "ABAP"
  | "ABAP CDS"
  | "ABNF"
  | "AGS Script"
  | "AIDL"
  | "AL"
  | "AMPL"
  | "ANTLR"
  | "API Blueprint"
  | "APL"
  | "ASL"
  | "ASN.1"
  | "ASP.NET"
  | "ATS"
  | "ActionScript"
  | "Ada"
  | "Adblock Filter List"
  | "Adobe Font Metrics"
  | "Agda"
  | "Alloy"
  | "Alpine Abuild"
  | "Altium Designer"
  | "AngelScript"
  | "Ant Build System"
  | "Antlers"
  | "ApacheConf"
  | "Apex"
  | "Apollo Guidance Computer"
  | "AppleScript"
  | "Arc"
  | "AsciiDoc"
  | "AspectJ"
  | "Assembly"
  | "Astro"
  | "Asymptote"
  | "Augeas"
  | "AutoHotkey"
  | "AutoIt"
  | "Avro IDL"
  | "Awk"
  | "BASIC"
  | "Ballerina"
  | "Batchfile"
  | "Beef"
  | "Befunge"
  | "Berry"
  | "BibTeX"
  | "Bicep"
  | "Bikeshed"
  | "Bison"
  | "BitBake"
  | "Blade"
  | "BlitzBasic"
  | "BlitzMax"
  | "Bluespec"
  | "Bluespec BH"
  | "Boo"
  | "Boogie"
  | "Brainfuck"
  | "BrighterScript"
  | "Brightscript"
  | "Browserslist"
  | "C"
  | "C#"
  | "C++"
  | "C-ObjDump"
  | "C2hs Haskell"
  | "CAP CDS"
  | "CIL"
  | "CLIPS"
  | "CMake"
  | "COBOL"
  | "CODEOWNERS"
  | "COLLADA"
  | "CSON"
  | "CSS"
  | "CSV"
  | "CUE"
  | "CWeb"
  | "Cabal Config"
  | "Cadence"
  | "Cairo"
  | "CameLIGO"
  | "Cap'n Proto"
  | "CartoCSS"
  | "Ceylon"
  | "Chapel"
  | "Charity"
  | "Checksums"
  | "ChucK"
  | "Circom"
  | "Cirru"
  | "Clarion"
  | "Clarity"
  | "Classic ASP"
  | "Clean"
  | "Click"
  | "Clojure"
  | "Closure Templates"
  | "Cloud Firestore Security Rules"
  | "CoNLL-U"
  | "CodeQL"
  | "CoffeeScript"
  | "ColdFusion"
  | "ColdFusion CFC"
  | "Common Lisp"
  | "Common Workflow Language"
  | "Component Pascal"
  | "Cool"
  | "Coq"
  | "Cpp-ObjDump"
  | "Creole"
  | "Crystal"
  | "Csound"
  | "Csound Document"
  | "Csound Score"
  | "Cuda"
  | "Cue Sheet"
  | "Curry"
  | "Cycript"
  | "Cypher"
  | "Cython"
  | "D"
  | "D-ObjDump"
  | "D2"
  | "DIGITAL Command Language"
  | "DM"
  | "DNS Zone"
  | "DTrace"
  | "Dafny"
  | "Darcs Patch"
  | "Dart"
  | "DataWeave"
  | "Debian Package Control File"
  | "DenizenScript"
  | "Dhall"
  | "Diff"
  | "DirectX 3D File"
  | "Dockerfile"
  | "Dogescript"
  | "Dotenv"
  | "Dylan"
  | "E"
  | "E-mail"
  | "EBNF"
  | "ECL"
  | "ECLiPSe"
  | "EJS"
  | "EQ"
  | "Eagle"
  | "Earthly"
  | "Easybuild"
  | "Ecere Projects"
  | "Ecmarkup"
  | "EditorConfig"
  | "Edje Data Collection"
  | "Eiffel"
  | "Elixir"
  | "Elm"
  | "Elvish"
  | "Elvish Transcript"
  | "Emacs Lisp"
  | "EmberScript"
  | "Erlang"
  | "Euphoria"
  | "F#"
  | "F*"
  | "FIGlet Font"
  | "FLUX"
  | "Factor"
  | "Fancy"
  | "Fantom"
  | "Faust"
  | "Fennel"
  | "Filebench WML"
  | "Filterscript"
  | "Fluent"
  | "Formatted"
  | "Forth"
  | "Fortran"
  | "Fortran Free Form"
  | "FreeBasic"
  | "FreeMarker"
  | "Frege"
  | "Futhark"
  | "G-code"
  | "GAML"
  | "GAMS"
  | "GAP"
  | "GCC Machine Description"
  | "GDB"
  | "GDScript"
  | "GEDCOM"
  | "GLSL"
  | "GN"
  | "GSC"
  | "Game Maker Language"
  | "Gemfile.lock"
  | "Gemini"
  | "Genero"
  | "Genero Forms"
  | "Genie"
  | "Genshi"
  | "Gentoo Ebuild"
  | "Gentoo Eclass"
  | "Gerber Image"
  | "Gettext Catalog"
  | "Gherkin"
  | "Git Attributes"
  | "Git Config"
  | "Git Revision List"
  | "Gleam"
  | "Glyph"
  | "Glyph Bitmap Distribution Format"
  | "Gnuplot"
  | "Go"
  | "Go Checksums"
  | "Go Module"
  | "Go Workspace"
  | "Godot Resource"
  | "Golo"
  | "Gosu"
  | "Grace"
  | "Gradle"
  | "Gradle Kotlin DSL"
  | "Grammatical Framework"
  | "Graph Modeling Language"
  | "GraphQL"
  | "Graphviz (DOT)"
  | "Groovy"
  | "Groovy Server Pages"
  | "HAProxy"
  | "HCL"
  | "HLSL"
  | "HOCON"
  | "HTML"
  | "HTML+ECR"
  | "HTML+EEX"
  | "HTML+ERB"
  | "HTML+PHP"
  | "HTML+Razor"
  | "HTTP"
  | "HXML"
  | "Hack"
  | "Haml"
  | "Handlebars"
  | "Harbour"
  | "Haskell"
  | "Haxe"
  | "HiveQL"
  | "HolyC"
  | "Hosts File"
  | "Hy"
  | "HyPhy"
  | "IDL"
  | "IGOR Pro"
  | "INI"
  | "IRC log"
  | "Idris"
  | "Ignore List"
  | "ImageJ Macro"
  | "Imba"
  | "Inform 7"
  | "Ink"
  | "Inno Setup"
  | "Io"
  | "Ioke"
  | "Isabelle"
  | "Isabelle ROOT"
  | "J"
  | "JAR Manifest"
  | "JCL"
  | "JFlex"
  | "JSON"
  | "JSON with Comments"
  | "JSON5"
  | "JSONLD"
  | "JSONiq"
  | "Janet"
  | "Jasmin"
  | "Java"
  | "Java Properties"
  | "Java Server Pages"
  | "JavaScript"
  | "JavaScript+ERB"
  | "Jest Snapshot"
  | "JetBrains MPS"
  | "Jinja"
  | "Jison"
  | "Jison Lex"
  | "Jolie"
  | "Jsonnet"
  | "Julia"
  | "Jupyter Notebook"
  | "Just"
  | "KRL"
  | "Kaitai Struct"
  | "KakouneScript"
  | "KerboScript"
  | "KiCad Layout"
  | "KiCad Legacy Layout"
  | "KiCad Schematic"
  | "Kickstart"
  | "Kit"
  | "Kotlin"
  | "Kusto"
  | "LFE"
  | "LLVM"
  | "LOLCODE"
  | "LSL"
  | "LTspice Symbol"
  | "LabVIEW"
  | "Lark"
  | "Lasso"
  | "Latte"
  | "Lean"
  | "Less"
  | "Lex"
  | "LigoLANG"
  | "LilyPond"
  | "Limbo"
  | "Linker Script"
  | "Linux Kernel Module"
  | "Liquid"
  | "Literate Agda"
  | "Literate CoffeeScript"
  | "Literate Haskell"
  | "LiveScript"
  | "Logos"
  | "Logtalk"
  | "LookML"
  | "LoomScript"
  | "Lua"
  | "M"
  | "M4"
  | "M4Sugar"
  | "MATLAB"
  | "MAXScript"
  | "MDX"
  | "MLIR"
  | "MQL4"
  | "MQL5"
  | "MTML"
  | "MUF"
  | "Macaulay2"
  | "Makefile"
  | "Mako"
  | "Markdown"
  | "Marko"
  | "Mask"
  | "Mathematica"
  | "Maven POM"
  | "Max"
  | "Mercury"
  | "Mermaid"
  | "Meson"
  | "Metal"
  | "Microsoft Developer Studio Project"
  | "Microsoft Visual Studio Solution"
  | "MiniD"
  | "MiniYAML"
  | "Mint"
  | "Mirah"
  | "Modelica"
  | "Modula-2"
  | "Modula-3"
  | "Module Management System"
  | "Monkey"
  | "Monkey C"
  | "Moocode"
  | "MoonScript"
  | "Motoko"
  | "Motorola 68K Assembly"
  | "Move"
  | "Muse"
  | "Mustache"
  | "Myghty"
  | "NASL"
  | "NCL"
  | "NEON"
  | "NL"
  | "NPM Config"
  | "NSIS"
  | "NWScript"
  | "Nasal"
  | "Nearley"
  | "Nemerle"
  | "NetLinx"
  | "NetLinx+ERB"
  | "NetLogo"
  | "NewLisp"
  | "Nextflow"
  | "Nginx"
  | "Nim"
  | "Ninja"
  | "Nit"
  | "Nix"
  | "Nu"
  | "NumPy"
  | "Nunjucks"
  | "Nushell"
  | "OASv2-json"
  | "OASv2-yaml"
  | "OASv3-json"
  | "OASv3-yaml"
  | "OCaml"
  | "ObjDump"
  | "Object Data Instance Notation"
  | "ObjectScript"
  | "Objective-C"
  | "Objective-C++"
  | "Objective-J"
  | "Odin"
  | "Omgrofl"
  | "Opa"
  | "Opal"
  | "Open Policy Agent"
  | "OpenAPI Specification v2"
  | "OpenAPI Specification v3"
  | "OpenCL"
  | "OpenEdge ABL"
  | "OpenQASM"
  | "OpenRC runscript"
  | "OpenSCAD"
  | "OpenStep Property List"
  | "OpenType Feature File"
  | "Option List"
  | "Org"
  | "Ox"
  | "Oxygene"
  | "Oz"
  | "P4"
  | "PDDL"
  | "PEG.js"
  | "PHP"
  | "PLSQL"
  | "PLpgSQL"
  | "POV-Ray SDL"
  | "Pact"
  | "Pan"
  | "Papyrus"
  | "Parrot"
  | "Parrot Assembly"
  | "Parrot Internal Representation"
  | "Pascal"
  | "Pawn"
  | "Pep8"
  | "Perl"
  | "Pic"
  | "Pickle"
  | "PicoLisp"
  | "PigLatin"
  | "Pike"
  | "PlantUML"
  | "Pod"
  | "Pod 6"
  | "PogoScript"
  | "Polar"
  | "Pony"
  | "Portugol"
  | "PostCSS"
  | "PostScript"
  | "PowerBuilder"
  | "PowerShell"
  | "Prisma"
  | "Processing"
  | "Procfile"
  | "Proguard"
  | "Prolog"
  | "Promela"
  | "Propeller Spin"
  | "Protocol Buffer"
  | "Protocol Buffer Text Format"
  | "Public Key"
  | "Pug"
  | "Puppet"
  | "Pure Data"
  | "PureBasic"
  | "PureScript"
  | "Pyret"
  | "Python"
  | "Python console"
  | "Python traceback"
  | "Q#"
  | "QML"
  | "QMake"
  | "Qt Script"
  | "Quake"
  | "R"
  | "RAML"
  | "RBS"
  | "RDoc"
  | "REALbasic"
  | "REXX"
  | "RMarkdown"
  | "RPC"
  | "RPGLE"
  | "RPM Spec"
  | "RUNOFF"
  | "Racket"
  | "Ragel"
  | "Raku"
  | "Rascal"
  | "Raw token data"
  | "ReScript"
  | "Readline Config"
  | "Reason"
  | "ReasonLIGO"
  | "Rebol"
  | "Record Jar"
  | "Red"
  | "Redcode"
  | "Redirect Rules"
  | "Regular Expression"
  | "Ren'Py"
  | "RenderScript"
  | "Rez"
  | "Rich Text Format"
  | "Ring"
  | "Riot"
  | "RobotFramework"
  | "Roff"
  | "Roff Manpage"
  | "Rouge"
  | "RouterOS Script"
  | "Ruby"
  | "Rust"
  | "SAS"
  | "SCSS"
  | "SELinux Policy"
  | "SMT"
  | "SPARQL"
  | "SQF"
  | "SQL"
  | "SQLPL"
  | "SRecode Template"
  | "SSH Config"
  | "STAR"
  | "STL"
  | "STON"
  | "SVG"
  | "SWIG"
  | "Sage"
  | "SaltStack"
  | "Sass"
  | "Scala"
  | "Scaml"
  | "Scenic"
  | "Scheme"
  | "Scilab"
  | "Self"
  | "ShaderLab"
  | "Shell"
  | "ShellCheck Config"
  | "ShellSession"
  | "Shen"
  | "Sieve"
  | "Simple File Verification"
  | "Singularity"
  | "Slash"
  | "Slice"
  | "Slim"
  | "SmPL"
  | "Smali"
  | "Smalltalk"
  | "Smarty"
  | "Smithy"
  | "Snakemake"
  | "Solidity"
  | "Soong"
  | "SourcePawn"
  | "Spline Font Database"
  | "Squirrel"
  | "Stan"
  | "Standard ML"
  | "Starlark"
  | "Stata"
  | "StringTemplate"
  | "Stylus"
  | "SubRip Text"
  | "SugarSS"
  | "SuperCollider"
  | "Svelte"
  | "Sway"
  | "Sweave"
  | "Swift"
  | "SystemVerilog"
  | "TI Program"
  | "TL-Verilog"
  | "TLA"
  | "TOML"
  | "TSQL"
  | "TSV"
  | "TSX"
  | "TXL"
  | "Talon"
  | "Tcl"
  | "Tcsh"
  | "TeX"
  | "Tea"
  | "Terra"
  | "Texinfo"
  | "Text"
  | "TextMate Properties"
  | "Textile"
  | "Thrift"
  | "Turing"
  | "Turtle"
  | "Twig"
  | "Type Language"
  | "TypeScript"
  | "Typst"
  | "Unified Parallel C"
  | "Unity3D Asset"
  | "Unix Assembly"
  | "Uno"
  | "UnrealScript"
  | "UrWeb"
  | "V"
  | "VBA"
  | "VBScript"
  | "VCL"
  | "VHDL"
  | "Vala"
  | "Valve Data Format"
  | "Velocity Template Language"
  | "Verilog"
  | "Vim Help File"
  | "Vim Script"
  | "Vim Snippet"
  | "Visual Basic .NET"
  | "Visual Basic 6.0"
  | "Volt"
  | "Vue"
  | "Vyper"
  | "WDL"
  | "WGSL"
  | "Wavefront Material"
  | "Wavefront Object"
  | "Web Ontology Language"
  | "WebAssembly"
  | "WebAssembly Interface Type"
  | "WebIDL"
  | "WebVTT"
  | "Wget Config"
  | "Whiley"
  | "Wikitext"
  | "Win32 Message File"
  | "Windows Registry Entries"
  | "Witcher Script"
  | "Wollok"
  | "World of Warcraft Addon Data"
  | "Wren"
  | "X BitMap"
  | "X Font Directory Index"
  | "X PixMap"
  | "X10"
  | "XC"
  | "XCompose"
  | "XML"
  | "XML Property List"
  | "XPages"
  | "XProc"
  | "XQuery"
  | "XS"
  | "XSLT"
  | "Xojo"
  | "Xonsh"
  | "Xtend"
  | "YAML"
  | "YANG"
  | "YARA"
  | "YASnippet"
  | "Yacc"
  | "Yul"
  | "ZAP"
  | "ZIL"
  | "Zeek"
  | "ZenScript"
  | "Zephir"
  | "Zig"
  | "Zimpl"
  | "cURL Config"
  | "desktop"
  | "dircolors"
  | "eC"
  | "edn"
  | "fish"
  | "hoon"
  | "jq"
  | "kvlang"
  | "mIRC Script"
  | "mcfunction"
  | "mupad"
  | "nanorc"
  | "nesC"
  | "ooc"
  | "q"
  | "reStructuredText"
  | "robots.txt"
  | "sed"
  | "wisp"
  | "xBase";

declare const LinguistLanguages: Record<LanguageName, LinguistLanguages.Language>;

declare namespace LinguistLanguages {
  interface Language {
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
    /**
     * Optional field. Only necessary as a replacement for the sample directory name if the
     * language name is not a valid filename under the Windows filesystem (e.g., if it
     * contains an asterisk).
     */
    fsName?: string
    searchable?: boolean
  }
}

export = LinguistLanguages;
