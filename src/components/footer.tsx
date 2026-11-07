import { profile } from "../data";

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="wrap">© 2026 {profile.name} · JJ Studio</p>
    </footer>
  );
}
