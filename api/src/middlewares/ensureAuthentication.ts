function ensureAuthentication(req, res, next) {
	if (!req.cookies.user) {
		return res.status(401).json({ error: "Não autorizado..." });
	}

	return next();
}

export { ensureAuthentication };
 