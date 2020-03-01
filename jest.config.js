module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>config/enzyme.config.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
