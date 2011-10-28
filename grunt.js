/*global config:true, task:true*/
config.init({
  meta: {
    name: 'javascript-kindof',
    title: 'JavaScript kindOf',
    version: '0.1.0',
    description: 'Get the kind of a value. "Kind of" like [[Class]] and typeof, but better.',
    homepage: 'http://github.com/cowboy/javascript-kindof',
    author: '"Cowboy" Ben Alman',
    license: ['MIT', 'GPL'],
    copyright: 'Copyright (c) 2011 "Cowboy" Ben Alman',
    repository: 'git://github.com/cowboy/javascript-kindof.git',
    banner: '/* {{meta.title}} - v{{meta.version}} - {{today "m/d/yyyy"}}\n' +
            ' * {{meta.homepage}}\n' + 
            ' * {{{meta.copyright}}}; Licensed {{join meta.license}} */'
  },
  concat: {
    'dist/ba-kindof.js': ['<banner>', '<file_strip_banner:lib/kindof.js>']
  },
  min: {
    'dist/ba-kindof.min.js': ['<banner>', 'dist/ba-kindof.js']
  },
  test: {
    files: ['test/**/*.js']
  },
  lint: {
    files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
  },
  watch: {
    files: '<config:lint.files>',
    tasks: 'lint:files test:files'
  },
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      eqnull: true,
      loopfunc: true,
      node: true
    },
    globals: {}
  },
  uglify: {}
});

// Default task.
task.registerTask('default', 'lint:files test:files concat min');
