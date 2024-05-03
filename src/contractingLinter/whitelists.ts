// export const allowedBuiltins = new Set([
//   'Exception', 'False', 'None', 'True', 'abs', 'all', 'any', 'ascii', 'bin', 'bool', 'bytearray',
//   'bytes', 'chr', 'dict', 'divmod', 'filter', 'format', 'frozenset', 'hex', 'int', 'isinstance',
//   'issubclass', 'import', 'len', 'list', 'map', 'max', 'min', 'oct', 'ord', 'pow', 'range', 'reversed',
//   'round', 'set', 'sorted', 'str', 'sum', 'tuple', 'zip'
// ]);

export const illegalBuiltins = new Set(['BufferError', 'dir', 'UnicodeTranslateError', 'super', 'license', 'object', '__name__', 'locals', 'globals', 'RecursionError', '__build_class__', 'property', '__import__', 'IndexError', 'quit', 'OverflowError', 'AssertionError', 'ConnectionResetError', 'hasattr', 'UserWarning', 'KeyboardInterrupt', 'ProcessLookupError', 'EnvironmentError', 'Warning', 'eval', 'classmethod', 'StopAsyncIteration', 'exec', 'input', 'IsADirectoryError', 'vars', 'LookupError', 'repr', 'delattr', 'ChildProcessError', 'BaseException', 'iter', 'RuntimeWarning', 'slice', 'ConnectionError', 'MemoryError', 'getattr', 'ImportWarning', 'StopIteration', 'SystemExit', 'callable', 'credits', 'AttributeError', 'ValueError', 'hash', 'KeyError', 'TypeError', 'NotADirectoryError', 'ResourceWarning', 'SystemError', 'ModuleNotFoundError', 'ImportError', 'PendingDeprecationWarning', 'NotImplemented', 'IndentationError', 'InterruptedError', 'UnicodeDecodeError', 'BrokenPipeError', 'EncodingWarning', 'type', 'memoryview', 'enumerate', 'FileNotFoundError', 'setattr', 'NotImplementedError', 'complex', 'EOFError', 'SyntaxWarning', 'open', 'TimeoutError', 'BlockingIOError', 'id', 'UnicodeError', 'OSError', 'NameError', 'UnicodeWarning', 'compile', 'exit', 'TabError', 'UnicodeEncodeError', 'aiter', 'breakpoint', 'BytesWarning', 'Ellipsis', 'ZeroDivisionError', 'ReferenceError', '__doc__', 'ConnectionRefusedError', 'UnboundLocalError', 'FloatingPointError', 'copyright', 'RuntimeError', 'ArithmeticError', 'FileExistsError', 'next', '__debug__', '__spec__', 'FutureWarning', 'staticmethod', 'IOError', 'print', 'DeprecationWarning', 'help', 'anext', 'GeneratorExit', 'ConnectionAbortedError', 'float', '__package__', '__loader__', 'PermissionError', 'SyntaxError'
]);

export const lintMessages = [
    "Illegal contracting syntax type used",
    "Illicit use of '_' before variable",
    "Illicit use of Nested imports",
    "ImportFrom compilation nodes not yet supported",
    "Contract not found in lib",
    "Illicit use of classes",
    "Illicit use of Async functions",
    "Invalid decorator used",
    "Multiple use of constructors detected",
    "Illicit use of multiple decorators",
    "Illicit keyword overloading for ORM assignments",
    "Multiple targets to ORM definition detected",
    "No valid contracting decorator found",
    "Illegal use of a builtin",
    "Reuse of ORM name definition in a function definition argument name",
    "Illegal argument annotation used",
    "No valid argument annotation found",
    "Illegal use of return annotation",
    "Illegal use of a nested function definition."
]
