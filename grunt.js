/*global config:true, task:true*/
config.init({
  meta: {
    name: 'javascript-getclass',
    title: 'JavaScript getClass',
    version: '0.1.0',
    description: 'Get the [[Class]] of a value.',
    homepage: 'http://github.com/cowboy/javascript-getclass',
    author: '"Cowboy" Ben Alman',
    license: ['MIT', 'GPL'],
    copyright: 'Copyright (c) 2011 "Cowboy" Ben Alman',
    repository: 'git://github.com/cowboy/javascript-getclass.git',
    banner: '/* {{meta.title}} - v{{meta.version}} - {{today "m/d/yyyy"}}\n' +
            ' * {{meta.homepage}}\n' + 
            ' * {{{meta.copyright}}}; Licensed {{join meta.license}} */'
  },
  concat: {
    'dist/ba-getclass.js': ['<banner>', '<file_strip_banner:lib/getclass.js>']
  },
  min: {
    'dist/ba-getclass.min.js': ['<banner>', 'dist/ba-getclass.js']
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
      eqnull: true
    },
    globals: {
      exports: true
    }
  },
  uglify: {}
});

// Default task.
task.registerTask('default', 'lint:files test:files concat min');
