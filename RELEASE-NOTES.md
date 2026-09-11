# 1.4.0-rc.0 (unpublished)

This candidate updates the Node wrapper and package installation. The existing
Snowboy engine libraries and models are unchanged.

- Use maintained node-pre-gyp tooling and declare the native build dependencies.
- Build the native addon locally rather than relying on historical S3 binaries.
- Compile JavaScript and type declarations before packing the npm release.
- Update the TypeScript configuration and C++ standard for newer Node versions.
- Honor `applyFrontend: false`, preserving Sam Detweiler's wrapper fix.
- Test installation of the actual tarball and native detector operation on
  Linux x64 with Node 14, 18, 20, and 22.

Source installation requires Python, a C++ compiler, make, and CBLAS/ATLAS.
On Ubuntu: `sudo apt-get install build-essential python3 libatlas-base-dev`.
The packaged static libraries retain their existing platform limitations;
macOS and Raspberry Pi hardware have not been validated by this CI matrix.

The CI workflow uploads a tested tarball; it never publishes to npm. Review the
candidate, complete required platform testing, and approve a release before
publishing. This candidate should use a prerelease dist-tag, not `latest`.
