// Add a new object to this array for each project. `id` is used in the URL (/projects/:id)
// and must be unique. `image` should point to a file you add under public/images/projects/.
//
// A project can optionally include a `subprojects` array. When present, the project's
// detail page (ProjectDetail.jsx) renders one extra section per entry — use this for a
// single course or internship that bundles a few distinct pieces of work together.
export const projects = [
  {
    id: "hil-nuclear-cybersecurity-training-kit",
    title: "HIL Nuclear Cybersecurity Training Kit",
    summary:
      "Computer Engineering capstone, sponsored by the Penn State Dept. of Nuclear Engineering.",
    date: "Aug 2026 — Present",
    image: "/images/projects/hil-nuclear-cybersecurity-training-kit.jpg",
    overview:
      "[Overview — describe the goal of the HIL kit, the hardware/software stack, and your role on the capstone team.]",
  },
  {
    id: "data-visualization-application",
    title: "Data Visualization Application",
    summary:
      "A MATLAB GUI app built during a BPMI internship for rapid analysis of large lab datasets, with Fourier and auto-spectrum features.",
    date: "June 2026 — Aug 2026",
    image: "/images/projects/data-visualization-application.png",
    overview:
      "Designed and developed a MATLAB GUI application for rapidly analyzing large lab datasets as an intern project at Bechtel Plant Machinery, Inc. (BPMI). The tool gives engineers an interactive way to load, inspect, and process test data without writing one-off scripts for every dataset. Working directly with the engineers who would use it, I turned their needs into concrete features — variable selection, sample-rate controls, and custom output graphs for Fourier and auto-spectrum analysis. On the performance side, I optimized the data-processing pipeline with partial file reads, pointer-based data access, and selective plotting, cutting processing time by roughly 4x on the largest datasets.",
    skills:
      "MATLAB, GUI development, signal processing (FFT / auto-spectrum), data pipeline optimization, stakeholder requirements gathering.",
  },
  {
    id: "computer-organization-and-design",
    title: "Computer Organization and Design",
    summary:
      "A three-project CMPSC 473 sequence spanning a custom memory allocator, a bare-metal kernel with paging, and a concurrent channel library.",
    date: "Spring 2026",
    image: "/images/projects/computer-organization-and-design.svg",
    overview:
      "Three systems-level projects completed for CMPSC 473 (Computer Organization and Design), each building a core piece of what an operating system provides — memory management, virtual memory and system calls, and thread synchronization primitives — from the ground up in C. Each project was completed as a two-person team.",
    subprojects: [
      {
        title: "Dynamic Memory Allocator",
        tagline:
          "A custom implementation of malloc/free/realloc/calloc with an explicit free list and block coalescing.",
        description:
          "Built a drop-in replacement for the C standard library's heap allocator, implementing mm_init, mm_malloc, mm_free, and mm_realloc directly on top of a raw memory region. The design evolved from a simple implicit free list (traverse every block to find space) to an explicit free list, where free blocks are linked via embedded next/previous pointers for far faster allocation.",
        features: [
          "Explicit free list with headers/footers encoding block size + allocation state, enabling fast traversal of only free blocks instead of the whole heap",
          "Block splitting on oversized allocations and boundary-tag coalescing of adjacent free blocks on free() to combat fragmentation",
          "16-byte aligned payloads with careful pointer arithmetic for header/footer/next/prev fields",
          "A custom mm_checkheap heap consistency checker validating alignment, block-boundary overlap, and heap-membership invariants",
          "Benchmarked and tuned against a provided driver and trace-based throughput/utilization suite measuring both correctness and space efficiency",
        ],
        skills:
          "Low-level memory management, pointer arithmetic, free-list data structure design, heap debugging with GDB, performance/fragmentation tradeoff analysis.",
      },
      {
        title: "Bare-Metal Kernel: Paging & System Calls",
        tagline:
          "A minimal x86-64 OS kernel adding syscall handling and multi-level page table support to a bootable \"MiniOS.\"",
        description:
          "Extended a bare-metal kernel (booting via UEFI) with two core OS primitives: a working system call interface and a full 4-level x86-64 page table hierarchy mapping virtual memory for both kernel and user space.",
        features: [
          "SYSCALL/SYSRET fast system-call path configured via model-specific registers, with a dispatch handler in the syscall entry point",
          "Hand-built 4-level page tables (PML4 → PDPE → PDE → PTE) mapping 4 GB of physical memory, constructed bottom-up with manual bit-field layouts for present/writable/user flags and physical frame addressing",
          "A separate user-space page table region supporting a user program page and a downward-growing user stack, with correct user-mode access bits for the privilege transition",
          "Extra-credit integration of the team's own malloc implementation directly into kernel memory management, replacing the stock allocator with zero code changes needed",
        ],
        skills:
          "x86-64 architecture internals, virtual memory/paging, kernel-mode programming in C and assembly, MSR-level hardware configuration, bare-metal debugging.",
      },
      {
        title: "Concurrent Channel Library",
        tagline:
          "A Go-style concurrent \"channel\" library in C — thread-safe message passing with blocking/non-blocking sends, receives, and multi-channel select.",
        description:
          "Implemented a full concurrency primitives library providing buffered and unbuffered channels for inter-thread communication, built from scratch on mutexes, condition variables, and semaphores.",
        features: [
          "channel_send/channel_receive supporting both blocking and non-blocking semantics over a shared ring buffer",
          "channel_close/channel_destroy with correct wake-up broadcasting to all blocked senders/receivers and defensive error states to prevent use-after-close bugs",
          "channel_select, a select()-style primitive that dynamically registers a semaphore with every candidate channel and blocks efficiently only when none are ready",
          "Validated against a custom test harness plus multithreaded stress tests simulating message-passing over graph/network topologies to surface race conditions under load",
        ],
        skills:
          "Multithreaded systems design, synchronization primitives (mutexes, condition variables, semaphores), race-condition debugging, dynamic data structure management under concurrency.",
      },
    ],
  },
  {
    id: "systems-programming",
    title: "Systems Programming",
    summary:
      "Three C systems-programming tools — a multithreaded TCP chat client, a signal-driven byte histogram, and an ANSI text-highlighting CLI.",
    date: "[term]",
    image: "/images/projects/systems-programming.svg",
    overview:
      "Three independent systems-programming projects in C, each focused on a different piece of the Unix/POSIX toolkit — network sockets and threading, signal handling and low-level I/O, and command-line tool design.",
    subprojects: [
      {
        title: "Mycord Client",
        tagline:
          "A multithreaded TCP chat client in C, implementing a custom binary protocol over sockets.",
        description:
          "Built a command-line chat client (mycord) that connects to a chat server over raw TCP sockets using a custom 1,064-byte binary message protocol (packed structs, network-byte-order encoding for type/timestamp fields, fixed-width username/message buffers). The client spawns a dedicated pthread to receive and render incoming messages concurrently while the main thread reads and validates user input from stdin, so sending and receiving never block each other.",
        features: [
          "CLI argument parsing (--port, --ip, --domain, --quiet) with DNS resolution via getaddrinfo and mutual-exclusion validation between --ip/--domain",
          "Full-read/full-write wrappers that correctly handle short reads/writes and EINTR retries — no undefined behavior on partial socket I/O",
          "Protocol-level message handling for login, logout, outbound/inbound chat messages, system notifications, and server-initiated disconnects",
          "ANSI-colored terminal output, including real-time @mention detection/highlighting with a terminal bell",
          "Graceful shutdown on SIGINT/SIGTERM/stdin EOF via a signal-safe flag, always sending a logout message before closing the socket",
        ],
        skills:
          "POSIX sockets (TCP/IPv4), multithreading with pthreads, binary protocol design, signal handling, DNS resolution, defensive I/O, CLI design.",
      },
      {
        title: "Histogram",
        tagline:
          "A Unix-style CLI tool that profiles byte-frequency distributions from a live input stream, controllable via signals.",
        description:
          "Implemented a long-running C program that reads arbitrary binary data from stdin one byte at a time and maintains a running histogram of all 256 possible byte values — useful for tasks like visualizing the entropy of a random number source. Rather than simply processing input and exiting, the program behaves like a Unix daemon: it stays alive indefinitely and reacts to OS signals sent to it mid-stream.",
        features: [
          "Signal-driven control flow: SIGUSR1 dumps the current histogram to histo.out without interrupting processing; SIGINT/SIGTERM dump-and-exit; EOF triggers a stdout dump",
          "Robust low-level I/O using read() directly on the byte stream, with correct EINTR retry handling so signal delivery never corrupts the data stream",
          "A formatted ASCII-bar visualization, right-justified counts, zero-padded hex byte labels, and bars proportionally scaled against the current maximum frequency",
          "Passed a full automated grading suite covering stdout output, partial/full signal-triggered file dumps, and both termination signals",
        ],
        skills:
          "Unix signal handling (signal()/sigaction()), low-level file descriptor I/O, stream processing, terminal data visualization, defensive error handling.",
      },
      {
        title: "Highlighter",
        tagline:
          "A grep/ack-style CLI text-highlighting utility with configurable colors and formatting.",
        description:
          "Built a command-line tool that scans input (from stdin or a file) line by line, finds all non-overlapping occurrences of a target string, and re-emits the text with matches wrapped in ANSI color codes — plus optional custom prefix/postfix markers around each match.",
        features: [
          "Full flag-based argument parser supporting a positional search term alongside -i/--input, -o/--output, -c/--color (7 selectable colors), --no-color, --prefix, and --postfix, with strict validation and Error:-prefixed diagnostics",
          "Non-overlapping substring matching per line, independent of newline boundaries",
          "Selective output routing — writes exclusively to either stdout or a specified file, never both",
          "Final match-count statistics reported to stderr on exit",
          "Designed for memory safety (verified with Valgrind) with no leaks across dynamic line buffers",
        ],
        skills:
          "C string processing, argument parsing, file I/O abstraction (stdin/file interchangeability), ANSI terminal formatting, defensive error handling, memory management.",
      },
    ],
  },
  {
    id: "fpga-programming",
    title: "FPGA Programming",
    summary:
      "A 5-stage pipelined MIPS CPU implemented from scratch in Verilog, with data forwarding and hazard-induced stalling.",
    date: "May 2025",
    image: "/images/projects/fpga-programming.jpg",
    overview:
      "Designed and implemented the full datapath for a classic 5-stage MIPS pipeline (Instruction Fetch → Decode → Execute → Memory → Write-Back) at the RTL level in Vivado, including the control unit, ALU, register file, pipeline registers between every stage, and the forwarding/hazard logic needed to run real programs correctly on pipelined hardware.",
    skills:
      "Digital logic design, RTL/Verilog, computer architecture (pipelining, hazards, forwarding), finite-state control design, hardware simulation and waveform debugging.",
    features: [
      "Complete 5-stage pipeline (IF → ID → EXE → MEM → WB) with a microcoded control unit decoding 15+ MIPS instructions and generating the full control-signal set for each",
      "Data hazard forwarding: EX/MEM and MEM/WB forwarding paths route in-flight ALU and memory results back to the decode stage, avoiding unnecessary stalls",
      "Load-use hazard detection that freezes the pipeline and injects a bubble exactly one cycle until a loaded value is ready for forwarding",
      "Control hazard handling via a 4-way PC-source mux resolving sequential, branch, jump, and jump-register targets",
      "Verified correctness by decoding 22 instruction lines, debugging 984 control lines, and analyzing waveforms across 80+ cycles with a dedicated testbench",
    ],
  },
  {
    id: "karaoke-circuit",
    title: "Karaoke Circuit",
    summary:
      "A fully analog audio processing circuit — vocal removal, tone shaping, and a volume-reactive LED meter — designed, simulated, and soldered onto a custom PCB.",
    date: "[term]",
    image: "/images/projects/karaoke-circuit.png",
    overview:
      "Designed an end-to-end analog signal chain around op-amp building blocks for EE210, moving from hand-derived transfer functions to Multisim simulation to a physical breadboard prototype and finally a soldered printed circuit board. The final product accepts a standard 3.5mm stereo input and provides independent bass/treble and volume controls, a normal/karaoke (vocal-cancellation) toggle, and a 4-LED bar-graph volume meter — all without a single line of firmware.",
    features: [
      "Switchable difference/summing amplifier — sums the L/R channels in normal mode or subtracts them in karaoke mode to cancel center-panned vocals",
      "Baxandall tone control — dual-potentiometer bass/treble shaping stage with resistor values solved from the Baxandall gain equation",
      "Volume potentiometer providing continuous 0–100% output scaling",
      "LED level meter — a bank of comparator op-amps sequentially lighting 4 LEDs as input volume increases, like a hardware analog VU meter",
      "Output buffer/attenuator stepping the signal back down to a safe range for standard 3.5mm line-out",
      "Re-derived resistor values for a second power rail (9V PCB vs. 15V breadboard) and validated behavior on an oscilloscope before soldering the final PCB",
    ],
    skills:
      "Analog circuit design (op-amp summing/difference amplifiers, active tone control, voltage dividers, comparator-based level detection), SPICE/Multisim simulation, oscilloscope-based validation, PCB assembly and soldering.",
  },
  {
    id: "school-database",
    title: "School Database",
    summary:
      "A normalized relational database backend for a course-scheduling and registration system, built on Apache Derby.",
    date: "[term]",
    image: "/images/projects/school-database.png",
    overview:
      "Designed and populated a normalized relational schema to model university course scheduling — courses, students, semesters, and the enrollment/scheduling relationships between them — implemented as an embedded Apache Derby database accessed via JDBC for a CMPSC 221 (Data Management) project.",
    features: [
      "Core tables including COURSE, STUDENT, SCHEDULE, and SEMESTER, modeling the many-to-many relationship between students and the courses they're scheduled into across terms",
      "Course records keyed by course code with a SEATS column tracking capacity/availability",
      "Student records tracked by last name, with real sample enrollment data populated and tested against the schema",
      "A full Derby transaction log and recovery segment — a live, queryable database rather than just a static schema dump",
    ],
    skills:
      "Relational schema design (entities, keys, many-to-many relationships), SQL DDL/DML, embedded database integration via JDBC, data modeling for a real-world scheduling/registration domain.",
  },
];
