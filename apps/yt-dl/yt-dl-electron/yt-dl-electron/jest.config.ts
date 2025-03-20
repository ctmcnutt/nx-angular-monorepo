export default {
  displayName: 'yt-dl-yt-dl-electron-yt-dl-electron',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../coverage/apps/yt-dl/yt-dl-electron/yt-dl-electron',
};
