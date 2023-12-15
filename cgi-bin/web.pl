#!/usr/bin/perl -T
# DarkGlass
# (c) Reuben Thomas <rrt@sc3d.org> 2002-2023
# https://rrt.sc3d.org/Software/DarkGlass
# Distributed under the GNU General Public License version 3, or (at
# your option) any later version.

use utf8;
use strict;
use warnings;

use CGI qw(:standard);

use lib ".";
# Set PATH securely before loading DarkGlass, whose init code uses it.
BEGIN {
  $ENV{PATH} = "/bin:/usr/bin:/usr/local/bin";
}
use DarkGlass;


# Configuration

# URL of server
$DarkGlass::ServerUrl = "https://ursalang.github.io";
# Root of site relative to root of server
$DarkGlass::BaseUrl = "/";
# Directory of site in file system
$DarkGlass::DocumentRoot = "../pages";
# Site name
$DarkGlass::Title = "The Ursa programming language";
# Site owner's name and email address
$DarkGlass::Author = "Reuben Thomas";
$DarkGlass::Email = "rrt\@sc3d.org";

# Custom macros
$DarkGlass::Macros{githubedit} = sub {
  my ($page) = @_;
  return "https://github.com/ursalang/ursalang.github.io/edit/main/pages/$page";
};
$DarkGlass::Macros{nextstep} = sub {
  my ($page, $text) = @_;
  return "<a class=\"btn btn-primary\" href=\"$page\"><span class=\"next-step\">$text</span></a>";
};

# Perform the request
# Command-line arguments are supplied when we run in static mode
DarkGlass::doRequest(@ARGV);
