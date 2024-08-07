#!/usr/bin/perl -T
# DarkGlass
# (c) Reuben Thomas <rrt@sc3d.org> 2002-2024
# https://rrt.sc3d.org/Software/DarkGlass
# Distributed under the GNU General Public License version 3, or (at
# your option) any later version.

use utf8;
use strict;
use warnings;

use Encode;
use File::Temp;
use File::stat;
use Time::localtime;

use Date::Calc qw(Month_to_Text English_Ordinal);
use File::Slurp qw(slurp);
use CGI qw(:standard);

use lib ".";
# Set PATH securely before loading DarkGlass, whose init code uses it.
BEGIN {
  $ENV{PATH} = "/bin:/usr/bin:/usr/local/bin";
}
use DarkGlass;
use RRT::Misc 0.12;


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
  my ($page, $text, $class) = @_;
  $class ||= "next-step";
  return "<a class=\"btn btn-primary\" href=\"$page\"><span class=\"$class\">$text</span></a>";
};
my $note_number = 0;
$DarkGlass::Macros{note} = sub {
  my ($linkText, $noteText) = @_;
  my $linkId = "note$note_number";
  $note_number++;
  return "<button class=\"note-button btn-secondary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#$linkId\" aria-expanded=\"false\" aria-controls=\"$linkId\">$linkText</button><span class=\"collapse\" id=\"$linkId\"><span class=\"card card-body\"><span>$noteText</span></span></span>";
};
sub ursa2html {
  my ($code) = @_;
  $code =~ s/&lt;/</g;
  $code =~ s/&amp;/&/g;
  my $tmpfile = File::Temp->new();
  print $tmpfile $code;
  open(READER, "-|", "pygmentize", "-l", "ursa", $tmpfile, "-f", "html", "-O", "nowrap=True")
    or die "ursa highlighting failed failed (open)";
  my $html = slurp(\*READER, {binmode => ':raw', chomp => 1});
  close(READER) or die "ursa highlighting failed (close)";
  $html =~ s/^\s+|\s+$//g; # Trim extra whitespace
  return decode_utf8($html);
}
$DarkGlass::Macros{ursa} = sub {
  my ($code) = @_;
  return "<span class=\"highlight\"><code>".ursa2html($code)."</code></span>";
};
$DarkGlass::Macros{ursabox} = sub {
  my ($code) = @_;
  return "<div class=\"highlight\"><pre><code>".ursa2html($code)."</code></pre></div>";
};
$DarkGlass::Macros{latestblog} = sub {
  my ($blogdir) = "$DarkGlass::DocumentRoot/blog";
  open(READER, "-|", "/bin/ls", "-r",$blogdir) or die "could not read blog directory (open)";
  chomp(my @lines = <READER>);
  close(READER) or die "could not read blog directory (close)";
  my $latest = $lines[1]; # Skip README.md
  my $timestamp = localtime(stat("$blogdir/$latest/README.md")->mtime);
  my $date_string = sprintf("%s %s %s", Month_to_Text($timestamp->mon() + 1), English_Ordinal($timestamp->mday()), $timestamp->year() + 1900);
  return "<a href=\"blog/$latest/README.md\">$latest</a> ($date_string)";
};

# Perform the request
# Command-line arguments are supplied when we run in static mode
DarkGlass::doRequest(@ARGV);
